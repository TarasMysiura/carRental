import { styled } from "styled-components";

export const Card = styled.li`
  /* box-sizing: border-box; */
  /* position: relative; */
  /* width: 274px; */
  display: flex;
  flex-direction: column;
  gap: 12px;
  max-height: 100%;
  list-style: none;
  justify-content: space-between;
`;

export const NameCard = styled.div`
  box-sizing: border-box;
  color: #121417;
  /* height: 314px; */

  font-family: "ManropeMedium", sans-serif;
  font-size: 16px;

  line-height: 1.5;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 14px;
`;
export const Img = styled.img`
  box-sizing: border-box;
  max-height: 250px;
  background: #f3f3f2;
  border-radius: 24px;
`;

export const Span = styled.span`
  color: #3470ff;
`;

export const DetailsCard = styled.div`
  color: rgba(18, 20, 23, 0.5);

  font-family: "ManropeRegular", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
`;
export const AdventDescription = styled.p`
  margin-top: 14px;
  /* margin-bottom: 8px; */
  color: #121417;
  font-family: "ManropeRegular", sans-serif;
  font-size: 14px;
  line-height: 1.43;
`;
export const AdventTitle = styled.p`
  margin-bottom: 8px;
  color: #121417;
  font-family: "ManropeRegular", sans-serif;
  font-size: 14px;
  line-height: 1.43;
`;

export const Ul = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  gap: 4px;
`;
export const Accessory = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  background-color: white;
`;
export const AccessoryName = styled.p`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);

  font-family: "ManropeRegular", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
`;

export const AccessorySpan = styled.span`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);

  font-family: "ManropeRegular", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  padding-right: 6px;
`;
export const Functionality = styled.li`
  display: flex;
  flex-wrap: wrap;
  gap: 6px;
  margin: 0;
  background-color: white;
`;
export const FunctionalityName = styled.p`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);

  font-family: "ManropeRegular", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
`;

export const FunctionalitySpan = styled.span`
  display: flex;
  flex-wrap: wrap;
  color: rgba(18, 20, 23, 0.5);

  font-family: "ManropeRegular", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  display: flex;
  flex-wrap: wrap;
  padding-right: 6px;
`;
export const UlConditions = styled.ul`
  display: flex;
  flex-wrap: wrap;
  background-color: white;
  gap: 8px;
`;
export const Condition = styled.li`
  display: flex;
  flex-direction: row;
  padding: 7px 14px;
  justify-content: center;
  align-items: center;
  gap: 8px;
  border-radius: 35px;
  background: #f9f9f9;
`;
export const ConditionText = styled.p`
  color: #363535;
  font-family: "MontserratRegular", sans-serif;
  font-size: 12px;
  line-height: 1.5;
  letter-spacing: -0.24px;
`;
export const ConditionSpan = styled.p`
  color: #3470ff;
  font-family: "MontserratSemiBold", sans-serif;
  font-size: 12px;
  line-height: 1.5;

  letter-spacing: -0.24px;
`;
export const Button = styled.button`
  display: inline-flex;
  width: 168px;
  height: 44px;
  padding: 12px 50px;
  justify-content: center;
  align-items: center;
  border-radius: 12px;
  background: #3470ff;

  font-family: "ManropeSemiBold", sans-serif;

  color: #ffffff;
`;
