/**
 * Import
 */
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';

/**
 * Local import
 */
// Composants

// Styles et assets

/**
 * Code
 */
class InfosCharte extends React.Component {
  componentDidMount() {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }

  render() {
    return (
      <div className="infos right">
        <div className="infos_divSubtitle">
          <p className="infos_textSubtitle">Charte du site</p>
        </div>

        <div className="infos_container">
          <p className="infos_abstract">
            The Hub est modéré a posteriori, les messages, ressources que vous postez sont directement publiés sans aucun contrôle préalable. Il est de votre responsabilité de veiller à ce que vos contributions ne portent pas préjudice à autrui et soient conforment à la réglementation en vigueur. Cependant les administrateurs ainsi que les professeurs se réservent le droit de retirer toute contribution qu’ils estiment déplacée, inappropriée, contraire aux lois et règlements, à cette charte d’utilisation ou susceptible de porter préjudice directement ou non à des tiers.
          </p>
          <ul className="infos_list">
            <li className="infos_list_element">
              <p><span className="infos_span">- Respectez la législation relative à la propriété intellectuelle :</span> la publication d’un contenu sur notre site vaut reconnaissance du caractère public de celles-ci et vous êtes tenu pour responsable de vos publications.</p>
            </li>
            <li className="infos_list_element">
              <p><span className="infos_span">- Ne tenez pas de propos</span> à caractère diffamatoire, discriminatoire, raciste, homophobe, agressif, provoquant ou injurieux ou des propos contraires à l’ordre public, aux bonnes mœurs et aux lois et règlements en vigueur.</p>
            </li>
            <li className="infos_list_element">
              <p><span className="infos_span">- Ne postez pas</span> de spam, de publicités ou des liens vers des sites dont le contenu thématique serait différent de la page visitée.</p>
            </li>
            <li className="infos_list_element">
              <p><span className="infos_span">- Respectez notre équipe.</span> Nous sommes ouverts aux avis positifs et aux avis négatifs s’ils sont constructifs et ne sont pas dénigrants, violents ou insultants et s’ils permettent d’installer un dialogue.</p>
            </li>
          </ul>
          <p className="infos_abstract">
            Les administrateurs du site se réservent le droit d’exclure du site, de façon temporaire ou définitive, toute personne dont les contributions sont en contradiction avec les règles mentionnées dans le présent document. Les organisateurs pourront transmettre aux autorités de police ou de justice toutes les pièces ou documents postés sur le Hub, s’ils estiment de leur devoir d’informer les autorités compétentes ou que la législation leur en fait obligation.
          </p>
          <p className="infos_abstract">
            Malgré tout le soin apporté à la clarification de ses principes éthiques auprès de ses adhérents, The Hub ne saurait être tenu pour responsable en cas de non respect par l’un d’entre eux.
          </p>
        </div>
      </div>
    );
  }
}

/**
 * Export
 */
export default InfosCharte;
