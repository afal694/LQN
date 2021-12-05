import { Typography } from "@mui/material";
import Head from "next/head";
import React from "react";

const Layout: React.FC = ({ children }) => {
	return (
		<div id="index">
			<Head>
				<title>Star Wars</title>
				<link rel="icon" href="/favicon.ico" />
			</Head>

			<header><h2>Star Wars</h2></header>
			{/* <aside></aside> */}
			<main>{children}</main>
		</div>
	);
};

export default Layout;
