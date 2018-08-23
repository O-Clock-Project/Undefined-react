/**
 * Import
 */
import React, { Fragment } from 'react';
import { animateScroll as scroll } from 'react-scroll';

/**
 * Local import
 */
// Composants

// Styles et assets

/**
 * Code
 */
class InfosWhoWeAre extends React.Component {
  componentDidMount() {
    scroll.scrollToTop({
      duration: 500,
      smooth: true,
    });
  }

  render() {
    return (
      <Fragment>
        <div className="infos_divSubtitle">
          <p className="infos_textSubtitle">Qui sommes-nous ?</p>
        </div>

        <div className="infos_container">
          <h2 className="infos_title_abstract">L'origine de The Hub</h2>
          <p className="infos_abstract">
            L’idée de la création de The Hub nous est venue durant notre parcours de formation au sein d’O’clock. Le soucis de recherche d’informations ou de ressources au sujet du développement web, trop souvent obsolète ou tout simplement peu fiable, c’est souvent posé. Et également les outils mis à la disposition des étudiants comme slack qui ne permettent pas la rémanence des ressources partagés ainsi que la possibilité de trier nos recherches.
          </p>
          <p className="infos_abstract">
            The Hub est un bookmaker social dans l’esprit d’un Hub. Il permet le partage entre étudiants et professeurs d’O’clock, de ressources sous toutes formes qu’elles soient tutos,vidéo, articles,etc en rapport avec le développement web et également en lien avec la formation O’clock avec des ressources propre à l’école (fiche récap’, annonce, annuaire étudiant).
          </p>
          <h2 className="infos_title_abstract">Les collaborateurs de The Hub</h2>
          <p className="infos_abstract">
            Le contenu du site doit sa richesse et sa diversification, aux élèves d’O’clock, et corps enseignants qui, grâce à leur contribution en ressources diverses, permettent au site une perpétuelle alimentation dans l’esprit d’un HUB.
          </p>
        </div>
      </Fragment>
    );
  }
}

/**
 * Export
 */
export default InfosWhoWeAre;
