import styled from "styled-components";

const Content = styled.div`
  transform: perspective(400px) rotateX(45deg);
`;

const Lyric = () => {
  return (
    <Content
      className="lyric font-plan font-bold text-white text-[30px]"
      flex="~ col"
    >
      <span>흐릿하게 드리운</span>
      <span>안갯속 All alone</span>
      <span>널 가로막은 경계선</span>
      <span>하나 둘 걷히면</span>
      <span>끝없이 또 Walk away</span>
      <span>널 가둔 그 미로</span>
    </Content>
  );
};

export default Lyric;
