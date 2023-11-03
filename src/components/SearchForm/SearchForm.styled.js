import { styled } from "styled-components";

export const StyleForm = styled.div`
  /* width: 300px; */
  .title {
    font-family: 'Manrope-500', sans-serif;
    color: #111111;
    font-size: 48px;
    /* font-weight: 500; */
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .formStyle {
    display: flex;
    gap: 18px;
  }

  .label {
    display: flex;
    flex-direction: column;
    gap: 8px;
    /* margin-bottom: 20px; */
  }

  .span {
    color: #8a8a89;
    font-family: 'Manrope-500', sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
  }

  .input {
    display: flex;
    padding: 14px 89px 14px 18px;
    justify-content: center;
    align-items: center;
    gap: 32px;
    border-radius: 14px;
    background: #f7f7fb;
    color: #121417;
    ::placeholder {
      color: #121417;
      font-family: 'Manrope-500', sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
      /* 111.111% */
    }
  }

  .button {
    box-sizing: border-box;
    display: flex;
    width: 136px;
    height: 48px;
    padding: 14px 44px;
    justify-content: center;
    align-items: center;
    flex-shrink: 0;
    border-radius: 12px;
    background: #3470ff;
    color: #ffffff;
    cursor: pointer;
  }
`;
