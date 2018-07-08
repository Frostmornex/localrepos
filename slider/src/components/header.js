import React, { Component } from 'react';

import Row from 'react-bootstrap/lib/Row';
import Col from 'react-bootstrap/lib/Col';
import styled from 'styled-components';

import Link from './link'

const List = styled.ul`
			display: flex;
			justify-content: space-between;
			align-items: center;
			padding: 0;
			height: 49px;
`
class Header extends React.Component {
	render() {
		return (
			<Row>
			<Col lg={12} >
				<nav>
				<List>
					<Link link="#" text="Вызов мастера"/>
					<Link link="#" text="Прайс на ремонт"/>
					<Link link="#" text="Наши преимущества"/>
					<Link link="#" text="Схема работы"/>
					<Link link="#" text="Отзывы клиентов"/>
					<Link link="#" text="Примеры работ"/>
					<Link link="#" text="Контакты"/>
				</List>
				</nav>
			</Col>
		</Row>
			)
	}
}

export default Header

/* заготовка для прикрепления хэдера
	position: fixed;
	или
	что бы меня крутилось вместе с прокруткой оно должно быть position fixed, но лучше это делать через скрипт функция scroll когда высотам меньше определённой, тогда задавать класс через classTogle
меню*
вот код делается через jquery только свои классы и велечины поставь
// Фикс хедера при скроле
      $(".head-line").removeClass("default");
      $(window).scroll(function(){
        if ($(this).scrollTop() > 38) {
          $(".head-line").addClass("default").fadeIn('fast');
        } else {
          $(".head-line").removeClass("default").fadeIn('fast');
        };
      });
*/