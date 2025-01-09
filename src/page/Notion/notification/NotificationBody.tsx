import styled from "styled-components";
import { useState, useEffect } from "react";
import Markdown from "react-markdown";
import rehypeRaw from "rehype-raw";
import { Helmet } from "react-helmet";
import usePostNotionList from "../../../custom/usePostNotionList";
import { useNavigate } from "react-router-dom";

const WrapperBox = styled.div`
  width: 100vw;
  height: 100vh;
  display: flex;
  align-items: center;
  flex-direction: column;
`;

const BodyWrapper = styled.div`
  width: 1067px;
  height: 528px;
  padding-top: 105px;
`;

const Input = styled.input`
  margin-top: 38px;
  width: 1067px;
  height: 52px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  color: black;

  &::placeholder {
    color: #dfdfdf;
  }
`;

const TextArea = styled.textarea`
  width: 1067px;
  height: 356px;
  border: 1px solid #dfdfdf;
  border-radius: 5px;
  margin-top: 40px;
  resize: none;

  &::placeholder {
    color: #dfdfdf;
  }
`;

const DragAndDropArea = styled.div`
  border: 1px dashed #dfdfdf;
  border-radius: 5px;
  padding: 20px 0 20px 0;
  margin-top: 20px;
  width: 1067px;
  text-align: center;
  background-color: #fafafa;
`;

const ModalOverlay = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100vw;
  height: 100vh;
  background: rgba(0, 0, 0, 0.5);
  display: flex;
  justify-content: center;
  align-items: center;
  z-index: 1000;
`;

const ModalContent = styled.div`
  background: white;
  padding: 20px;
  border-radius: 10px;
  width: 800px;
  max-height: 80vh;
  overflow-y: auto;
  box-shadow: 0 4px 8px rgba(0, 0, 0, 0.2);
  position: relative;
`;

const CloseButton = styled.button`
  position: absolute;
  top: 10px;
  right: 10px;
  background: none;
  border: none;
  font-size: 1.5rem;
  cursor: pointer;
`;

function NotificationBody() {
  const [title, setTitle] = useState<string>("");
  const [contents, setContents] = useState<string>(
    "# 마크다운 ```문법```을 사용해 작성해 주세요"
  );

  const [images, setImages] = useState<{ id: string; base64: string }[]>([]);
  const [isModalOpen, setIsModalOpen] = useState<boolean>(false);

  const { postArticle } = usePostNotionList();

  const handleFileUpload = (file: File) => {
    const reader = new FileReader();
    reader.onload = () => {
      const base64Image = reader.result as string;
      const imageId = `image-${Date.now()}`;
      const markdownImageTag = `![Image ${imageId}]`;
      const htmlComment = `<!-- ${markdownImageTag} -->`;

      setImages((prev) => [...prev, { id: imageId, base64: base64Image }]);
      setContents((prev) => `${prev}\n\n${htmlComment}`);
    };
    reader.readAsDataURL(file);
  };

  const handleDrop = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
    const files = e.dataTransfer.files;
    if (files.length > 0) {
      const file = files[0];
      if (file.type.startsWith("image/")) {
        handleFileUpload(file);
      } else {
        alert("이미지 파일만 업로드 가능합니다.");
      }
    }
  };

  const handleDragOver = (e: React.DragEvent<HTMLDivElement>) => {
    e.preventDefault();
  };

  const go = useNavigate();

  const goServer = () => {
    go("/notion");
    const articleData = {
      title: title,
      content: contents,
      category: 0,
      author: "이상혁",
      endsAt: "2024.12.26",
    };

    postArticle(articleData);
  };

  useEffect(() => {
    const updatedImages = images.filter((image) =>
      contents.includes(`![Image ${image.id}]`)
    );
    setImages(updatedImages);
  }, [contents]);

  return (
    <>
      <Helmet>
        <title>JOVA | 공지 작성</title>
      </Helmet>
      <WrapperBox>
        <BodyWrapper>
          <h1>공지 작성</h1>
          <Input
            placeholder="제목을 입력해 주세요"
            value={title}
            onChange={(e) => setTitle(e.target.value)}
          />
          <TextArea
            placeholder="마크다운문법을 사용해 작성하세요"
            value={contents}
            onChange={(e) => setContents(e.target.value)}
          />
          <DragAndDropArea onDrop={handleDrop} onDragOver={handleDragOver}>
            이미지를 드래그 앤 드롭하거나 클릭하여 업로드하세요.
          </DragAndDropArea>
          <button onClick={() => setIsModalOpen(true)}>미리보기</button>
          <button onClick={goServer}>작성</button>
        </BodyWrapper>

        {isModalOpen && (
          <ModalOverlay onClick={() => setIsModalOpen(false)}>
            <ModalContent onClick={(e) => e.stopPropagation()}>
              <CloseButton onClick={() => setIsModalOpen(false)}>×</CloseButton>
              <Markdown rehypePlugins={[rehypeRaw]}>{contents}</Markdown>
              {images.map((image) => (
                <img
                  key={image.id}
                  src={image.base64}
                  alt={image.id}
                  style={{
                    maxWidth: "100%",
                    height: "auto",
                    marginTop: "20px",
                  }}
                />
              ))}
            </ModalContent>
          </ModalOverlay>
        )}
      </WrapperBox>
    </>
  );
}

export default NotificationBody;
