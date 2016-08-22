import * as React from "react";
import * as ReactDOM from "react-dom";
import { NavbarB } from "./navbar";
import { Main } from "./main";
import { Footer } from "./footer";
interface MyProps {}
interface MyState {}

export class Page extends React.Component<MyProps, MyState> {
    render() {
        return <div>
            <NavbarB />
            <Main />
            <Footer />
        </div>
    }
}