import React from 'react';
import "@/src/styles/global.css";
import Header from "@/src/components/header";
import Footer from "@/src/components/footer";


export const metadata = {
    title: 'mega vision',
    description: 'mega vision',
    icons: {
        icon: '/next.svg',
    },
};

const RootLayout = ({children}) => {
    return (<html lang="en">
    <body className="overflow-y-scroll overflow-x-hidden">
    <Header/>
    {children}
    <Footer/>
    </body>
    </html>);
};
export default RootLayout;
