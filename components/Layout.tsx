import Head from "next/head";
import Image from "next/image";
import React from "react";
import logo from "../logo.png"

const Layout: React.FC = ({ children }) => {
	return (
		<div id="index">
			<Head>
				<title>Star Wars</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header>
				<Image src={logo} width={100} height={45} />
			</header>
			<main>{children}</main>
		</div>
	);
};

export default Layout;
