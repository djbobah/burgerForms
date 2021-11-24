import { useState } from "react";
import "./App.css";
import pathFunnyBurger from "./images/Funny-Burger-With-Long-Tongue-Picture.jpg";
import pathBurgerImage from "./images/burger.jpg";

const MEAT = [
  { id: "1", name: "Говядина" },
  { id: "2", name: "Свинина" },
  { id: "3", name: "Курица" },
  { id: "4", name: "Рыба" },
];

const CHEESE = [
  { id: "1", name: "Моцарелла" },
  { id: "2", name: "Пармезан" },
  { id: "3", name: "Чедер" },
  { id: "4", name: "Рокфор" },
];
const SOUSES = [
  { id: "1", name: "Кетчуп" },
  { id: "2", name: "Майонез" },
  { id: "3", name: "Чили" },
  { id: "4", name: "Сырный" },
];

function App() {
  const [name, setName] = useState();
  const [email, setEmail] = useState();
  const [phone, setPhone] = useState();

  const [meat, setMeat] = useState(MEAT[0].id);
  const [cheese, setCheese] = useState(CHEESE[0].id);
  const [souse, setSouse] = useState(SOUSES[0].id);
  const [hasOnion, setHasOnion] = useState(true);

  const [countTomatoes, setCountTomatoes] = useState(2);
  const [countCucombers, setCountCucombers] = useState(2);
  const [hasOrdered, setHasOrdered] = useState(false);

  const handleChangeName = (event) => {
    // console.log(event.target.value);
    setName(event.target.value);
  };
  const handleChangeEmail = (event) => {
    // console.log(event.target.value);
    setEmail(event.target.value);
  };
  const handleChangePhone = (event) => {
    // console.log(event.target.value);
    setPhone(event.target.value);
  };
  const handleChangheCheese = (event) => {
    setCheese(event.target.value);
  };
  const handleChangheSauses = (event) => {
    setSouse(event.target.value);
  };
  const handleChangheMeat = (event) => {
    setMeat(event.target.value);
  };

  const handleIncreaseCountTomatoes = (event) => {
    event.preventDefault();
    setCountTomatoes((prevValue) => (prevValue >= 4 ? 4 : prevValue + 1));
  };
  const handleDecreaseCountTomatoes = (event) => {
    event.preventDefault();
    setCountTomatoes((prevValue) => (prevValue <= 0 ? 0 : prevValue - 1));
  };
  const handleIncreaseCountCucombers = (event) => {
    event.preventDefault();
    setCountCucombers((prevValue) => (prevValue >= 4 ? 4 : prevValue + 1));
  };
  const handleDecreaseCountCucombers = (event) => {
    event.preventDefault();
    setCountCucombers((prevValue) => (prevValue <= 0 ? 0 : prevValue - 1));
  };

  const handleSubmitButton = (event) => {
    event.preventDefault();
    setHasOrdered(!hasOrdered);
  };
  const handleOnionChange = (event) => {
    setHasOnion(!hasOnion);
  };

  return (
    <section>
      <div className="form-app">
        {!hasOrdered && (
          <form className="form-app__form">
            <h2>Заполните ваши данные</h2>
            <div className="contact-information">
              <div className="field-input">
                <p>Имя</p>
                <input type="text" onChange={handleChangeName} />
              </div>
              <div className="field-input">
                <p>Почта</p>
                <input type="text" onChange={handleChangeEmail} />
              </div>
              <div className="field-input">
                <p>Телефон</p>
                <input type="text" onChange={handleChangePhone} />
              </div>
            </div>
            <div className="selection">
              <p className="selection__text">Выбор котлеты</p>
              <select onChange={handleChangheMeat}>
                {MEAT.map((elem) => (
                  <option key={elem.id} value={elem.id}>
                    {elem.name}
                  </option>
                ))}
              </select>
              <p className="selection__text">Выбор сыра</p>
              <select onChange={handleChangheCheese}>
                {CHEESE.map((elem) => (
                  <option key={elem.id} value={elem.id}>
                    {elem.name}
                  </option>
                ))}
              </select>
              <p className="selection__text">Выбор соуса</p>
              <select onChange={handleChangheSauses}>
                {SOUSES.map((elem) => (
                  <option key={elem.id} value={elem.id}>
                    {elem.name}
                  </option>
                ))}
              </select>
              <p className="selection__text">Количество ломтиков помидора: </p>
              <div className="number">
                <button
                  className="number-minus"
                  onClick={handleDecreaseCountTomatoes}
                >
                  -
                </button>
                <input type="number" value={countTomatoes} readOnly />
                <button
                  className="number-plus"
                  onClick={handleIncreaseCountTomatoes}
                >
                  +
                </button>
              </div>{" "}
              <p className="selection__text">Количество ломтиков огурца: </p>
              <div className="number">
                <button
                  className="number-minus"
                  onClick={handleDecreaseCountCucombers}
                >
                  -
                </button>
                <input type="number" value={countCucombers} readOnly />
                <button
                  className="number-plus"
                  onClick={handleIncreaseCountCucombers}
                >
                  +
                </button>
              </div>
              <p className="selection__text">Лук: </p>
              <div className="selection__container">
                <div className="field-input">
                  <input
                    type="checkbox"
                    name="onion"
                    value
                    checked={hasOnion}
                    onChange={handleOnionChange}
                  />
                </div>
              </div>
              <button type="submit" onClick={handleSubmitButton}>
                Сформировать заказ
              </button>
              <button type="submit" onClick={handleSubmitButton}>
                Сбросить все настройки
              </button>{" "}
              <img
                className="image-decoration"
                src={pathFunnyBurger}
                alt="icon burger"
              />
            </div>
          </form>
        )}
        {hasOrdered && (
          <div className="modal-window">
            <h2>Добрый день {name}!</h2>
            <h2>Ваш бургер готовится</h2>
            <p>Котлета: {MEAT.find((elem) => elem.id === meat)?.name} </p>
            <p>Сыр: {CHEESE.find((elem) => elem.id === cheese)?.name} </p>
            <p>Соус: {SOUSES.find((elem) => elem.id === souse)?.name} </p>
            <p>Лук: {hasOnion ? "Есть" : "Нет"} </p>
            <p>Количество ломтиков помидора: {countTomatoes} </p>
            <p>Количество ломтиков огурца: {countCucombers} </p>
            <img className="Burger" src={pathBurgerImage} alt="burger" />

            <p className="orderContacts">
              Как только ваш заказ будет готов <br />
              мы вам сразу сообщим по указанным вами <br />
              телефону: {phone} <br />и электронной почте: {email}{" "}
            </p>
            <button onClick={handleSubmitButton}>Сделать еще один заказ</button>
          </div>
        )}
      </div>
    </section>
  );
}

export default App;
