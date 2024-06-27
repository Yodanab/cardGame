import React from "react";
import { PackSkelton } from "frontend/layout/Loader/PackSkelton/PackSkelton";
import { PackGrid, ShopWrap } from "./Shop.style";

export const Shop = () => {
  return (
    <ShopWrap>
      <PackGrid>
        {Array.from({ length: 3 }).map((_, i) => {
          return <PackSkelton key={i} />;
        })}
      </PackGrid>
    </ShopWrap>
  );
};
