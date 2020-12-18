import React from "react";
import { useLocation } from "react-router-dom";

const Empty = () => {
  const isSearch = useLocation("/like").pathname === "/like";
  return (
    <div>
      {isSearch ? (
        <div>
          <center>
            <img
              alt="empty"
              src="https://semantic-ui.com/images/wireframe/image.png"
              width={200}
            />
          </center>
          <center>
            Ваш список желаний пуст!
            <br /> Наполните его товарами нажав на сердечко.
          </center>
        </div>
      ) : (
        <div>
          <center>
            <img
              alt="empty"
              src="https://semantic-ui.com/images/wireframe/image.png"
              width={200}
            />
          </center>
          <center>
            По Вашему запросу ничего не найдено. <br />
            Попробуйте изменить запрос.
          </center>
        </div>
      )}
    </div>
  );
};

export default Empty;
