import { styled } from "styled-components";

export const Card = styled.li`
  position: relative;
  width: 274px;

  list-style: none;
`;
export const Heart = styled.button`
  position: absolute;
  right: 14px;
  top: 14px;
`;

export const Img = styled.img`
  min-width: 274px;
  height: 268px;
  border-radius: 14px;
  background: #f3f3f2;
  margin-bottom: 14px;
`;
export const NameCard = styled.div`
  color: #121417;

  font-family: "Manrope-500", sans-serif;
  font-size: 16px;

  line-height: 1.5;
  display: flex;
  justify-content: space-between;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const DetailsCard = styled.div`
  color: rgba(18, 20, 23, 0.5);

  font-family: "Manrope-400", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
`;

export const Button = styled.button`
  display: flex;
  width: 274px;
  height: 44px;
  padding: 12px 99px;
  justify-content: center;
  align-items: center;
  flex-shrink: 0;

  border-radius: 12px;
  background: #3470ff;
  font-family: "Manrope-600", sans-serif;

  color: #ffffff;
  margin-top: 28px;
`;
