import { styled } from "styled-components";

export const StyleForm = styled.div`
  .title {
    font-family: "Manrope-500", sans-serif;
    color: #111111;
    font-size: 48px;
    margin-left: auto;
    margin-right: auto;
    display: flex;
    justify-content: center;
    margin-bottom: 20px;
  }

  .formStyle {
    display: flex;
    gap: 18px;
    justify-content: center;
    align-items: end;
  }

  .label {
    display: flex;
    flex-direction: column;
    gap: 8px;
  }

  .span {
    color: #8a8a89;
    font-family: "Manrope-500", sans-serif;
    font-size: 14px;
    font-style: normal;
    font-weight: 500;
    line-height: 18px; /* 128.571% */
  }

  .input {
    display: flex;
    padding: 14px 18px 14px 18px;
    justify-content: center;
    align-items: center;
    height: 48px;
    gap: 32px;
    border-radius: 14px;
    background: #f7f7fb;
    color: #121417;
    border: none;
    ::placeholder {
      color: #121417;
      font-family: "Manrope-500", sans-serif;
      font-size: 18px;
      font-style: normal;
      font-weight: 500;
      line-height: 20px;
    }
  }

  .inputCarBrand {
    width: 224px;
  }
  .inputPrice {
    width: 125px;
  }
  .inputPriceFrom {
    width: 160px;
    border-radius: 14px 0px 0px 14px;
    border-right: 1px solid rgba(138, 138, 137, 0.2);
  }
  .inputPriceTo {
    width: 160px;
    border-radius: 0px 14px 14px 0px;
  }

  .inputWrapper {
    display: flex;
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
