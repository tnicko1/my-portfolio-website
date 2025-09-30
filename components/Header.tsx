import React from 'react';
import CardNav from './CardNav'; // Assuming CardNav.tsx is in the same directory

const cardNavItems = [
    {
        label: "About",
        bgColor: "#0D0716",
        textColor: "#fff",
        links: [
            { label: "Company", href: "#", ariaLabel: "About Company" },
            { label: "Careers", href: "#", ariaLabel: "About Careers" }
        ]
    },
    {
        label: "Projects",
        bgColor: "#170D27",
        textColor: "#fff",
        links: [
            { label: "Featured", href: "#", ariaLabel: "Featured Projects" },
            { label: "Case Studies", href: "#", ariaLabel: "Project Case Studies" }
        ]
    },
    {
        label: "Contact",
        bgColor: "#271E37",
        textColor: "#fff",
        links: [
            { label: "Email", href: "#", ariaLabel: "Email us" },
            { label: "Twitter", href: "#", ariaLabel: "Twitter" },
            { label: "LinkedIn", href: "#", ariaLabel: "LinkedIn" }
        ]
    }
];

const Header: React.FC = () => {
  return (
    <header>
      <CardNav
        logo="./ntc-logo.svg"
        items={cardNavItems}
        baseColor="#06001080"
        menuColor="#e2e8f0"
        buttonBgColor="#5227ff"
        buttonTextColor="#ffffff"
        ease="back.out(1.7)"
      />
    </header>
  );
};

export default Header;
