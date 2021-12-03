import React from "react";
import landingPage from "../../assets/landing_page.jpg";
const LandingPage = () => {
  return (
    <React.Fragment>
      <img src={landingPage} alt="....jj" />
      <h3>Sauveteurs du dunkerquois</h3>
      <p>
        Bienvenue sur le site des sauveteurs du dunkerquois. Ce site rend
        hommage aux femmes, hommes et enfants qui ont réalisé des actes de
        sauvetages en milieu aquatique. Ces sauveteurs, habitants du dunkerquois
        (de Bray-Dunes à Grand-Fort-Philippe), ont participé à plus de 900
        sauvetages en mer et plus de 1100 sauvetages individuels. Œuvrant avec
        courage, abnégation et souvent au mépris du risque ils méritent
        amplement que leurs actes soient pérennisés.
      </p>
      <div>
        <img />
        <p>136 ans sauvetage de la goélette anglaise GOLDEN SHEAF</p>
      </div>
      <div>
        <img />
        <p>
          Sauvetage du PALMA 28 décembre 1900 <br />5 hommes sauvés
        </p>
      </div>
    </React.Fragment>
  );
};

export default LandingPage;
