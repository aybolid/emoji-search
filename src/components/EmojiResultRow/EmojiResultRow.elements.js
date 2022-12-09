import styled from "styled-components";

export const ResultRow = styled.div`
  display: flex;
  width: 700px;
  padding: 10px 30px;
  align-items: center;
  justify-content: space-between;
  margin: 20px 0px 20px 0px;
  border-radius: 10px;
  cursor: pointer;
  background-color: #303030;
  transition: all 200ms ease;

  &:hover {
    background-color: #333333;
  }
  &:active {
    background-color: #505050;
  }
`;

export const EmojiImg = styled.img`
  user-select: none;
  transition: all 300ms ease-in-out;

  &:hover {
    transform: scale(1.2);
  }
`;

export const EmojiTitle = styled.span`
  font-weight: 600;
  font-size: 23px;
`;

export const EmojiInfo = styled.div`
  display: flex;
  align-items: center;
  justify-content: center;
  background-color: #242424;
  width: 200px;
  border-radius: 10px;
  user-select: none;
  opacity: 0.5;
  cursor: pointer;
  overflow: hidden;
`;
