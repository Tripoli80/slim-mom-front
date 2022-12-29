import React from 'react';
import styled from './CalculatorСalorieForm.module.css';
import { Translator } from 'components/language/translator';

export const CalculatorСalorieForm = () => {
  const handleSubmit = event => {
    event.preventDefault();
    const height = document.getElementById('height').value;
    const age = document.getElementById('age').value;
    const currWeight = document.getElementById('currWeight').value;
    const desWeight = document.getElementById('desWeight').value;
    const blood = document.querySelector('input[name="radio"]:checked').value;

    // console.log(height + ' ' + age + ' ' + currWeight + ' ' + desWeight + ' ' + blood)
    // form.reset()
  };

  return (
    <form className={styled.form} onSubmit={handleSubmit}>
      <h2 className={styled.title}>{Translator('calculateYourDaily')}</h2>
      <div className={styled.form__inputs} name="inputs" id="inputs">
        <div className={styled.form__item}>
          <label htmlFor="height" className={styled.form__label}>
            {Translator('height')}
          </label>
          <input
            id="height"
            type="number"
            name="height"
            className={styled.form__input}
            required
          />
        </div>
        <div className={styled.form__item}>
          <label htmlFor="age" className={styled.form__label}>
            {Translator('age')}
          </label>
          <input
            id="age"
            type="number"
            name="age"
            className={styled.form__input}
            required
          />
        </div>
        <div className={styled.form__item}>
          <label htmlFor="currWeight" className={styled.form__label}>
            {Translator('currentWeight')}
          </label>
          <input
            id="currWeight"
            type="number"
            name="currWeight"
            className={styled.form__input}
            required
          />
        </div>
        <div className={styled.form__item}>
          <label htmlFor="desWeight" className={styled.form__label}>
            {Translator('desiredWeight')}
          </label>
          <input
            id="desWeight"
            type="number"
            name="desWeight"
            className={styled.form__input}
            required
          />
        </div>
        <div className={styled.form__item}>
          <label className={styled.form__label}>
            {Translator('bloodType')}
          </label>
        </div>
        <div className={styled.form__radio}>
          <input type="radio" name="radio" id="radio1" value={1} />
          <label htmlFor="radio1">
            <span className={styled.checkmark}>
              <span className={styled.checkmark__inside}></span>
            </span>
            <span>1</span>
          </label>
          <input type="radio" name="radio" id="radio2" value={2} />
          <label htmlFor="radio2">
            <span className={styled.checkmark}>
              <span className={styled.checkmark__inside}></span>
            </span>
            <span>2</span>
          </label>
          <input type="radio" name="radio" id="radio3" value={3} />
          <label htmlFor="radio3">
            <span className={styled.checkmark}>
              <span className={styled.checkmark__inside}></span>
            </span>
            <span>3</span>
          </label>
          <input type="radio" name="radio" id="radio4" value={4} />
          <label htmlFor="radio4">
            <span className={styled.checkmark}>
              <span className={styled.checkmark__inside}></span>
            </span>
            <span>4</span>
          </label>
        </div>
      </div>
      <button type="submit" className={styled.form__btn}>
        {handleSubmit}
      </button>
    </form>
  );
};
