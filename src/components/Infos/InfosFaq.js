/**
 * Import
 */
import React from 'react';
import { animateScroll as scroll } from 'react-scroll';
import { FaSortDown } from 'react-icons/fa';

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
          <h1 className="infos_textSubtitle">Foire aux questions</h1>
        </div>

        <div className="infos_container">
          <h2 className="infos_title_abstract">Comment puis-je poster un Bookmark ?</h2>
          <p className="infos_abstract">
            Tu as juste à te rendre dans la page Bookmarks. Tu y trouveras un bouton “Ajouter”, qui te mènera à un formulaire où tu pourras saisir les différentes informations à indiquer sur le Bookmark que tu souhaites partager. Il sera mis en ligne immédiatement et accessible directement sur le site.
          </p>
          <h2 className="infos_title_abstract">Les Bookmarks sont-ils modérés ou totalement libres de publication ?</h2>
          <p className="infos_abstract">
            Une fois l’étape d'ajout d’un Bookmark grâce au formulaire passé, celui-ci est automatiquement ajouté aux autres Bookmarks disponibles. Cependant, nous nous réservons le droit de bannir ou de supprimer une ressource non appropriée dans le cadre de la charte du site.
            Dans une version ultérieure, encore en développement, tu pourras signaler toi-même un Bookmark afin que l’équipe de modération du site soit avertie directement.
          </p>
          <h2 className="infos_title_abstract">Comment modifier mon profil ?</h2>
          <p className="infos_abstract">
            Directement sur la page de ton Profil, tu as accès à toutes tes informations personnelles et également au bouton “Modifier ton profil”. En y accédant, un formulaire de modification te sera proposé.
            C’est également sur ce formulaire que tu pourras modifier ton mot de passe.
          </p>
          <h2 className="infos_title_abstract">Comment m’y retrouver parmi tous les Bookmarks postés ?</h2>
          <p className="infos_abstract">
            Sur la page Bookmarks, tu disposes d’une série de filtres qui te permettent de mener des recherches précises :
            - Support : Ecrit, Audio ou Vidéo.
            - Langue : La langue dans laquelle est disponible le Bookmark.
            - Niveau : Le niveau de compétence dans le sujet traité pour lequel le Bookmark est destiné (Commencer, Progresser, Se dépasser).
          </p>
          <p className="infos_abstract">
            Dans la section de droite, tu disposes également en haut de plusieurs tris qui peuvent t’aider à accéder à ce que tu désires:
            - Date d’ajout du Bookmark.
            - Date de publication de la source ciblée par le Bookmark.
            - Nombre de favoris.
            - Score issus des votes de tous les utilisateurs du Hub.
          </p>
          <h2 className="infos_title_abstract">Que veux dire la mention “Certified by Prof” ?</h2>
          <p className="infos_abstract">
            Cette mention (matérialisée par une petite médaille) permet de reconnaître facilement les Bookmarks qui ont été validés par le corps enseignant d’O’Clock.
          </p>
          <h2 className="infos_title_abstract">Comment ajouter un Bookmark à mes favoris ?</h2>
          <p className="infos_abstract">
            En te rendant sur la page du Bookmark choisi, tu trouvera un bouton <FaSortDown /> qui permet de l’ajouter dans tes favoris.
          </p>
          <h2 className="infos_title_abstract">Où puis-je retrouver mes favoris ou les bookmarks que j’ai posté ?</h2>
          <p className="infos_abstract">
            En te rendant sur ta page de profil, tu trouvera un bouton “Mes favoris” et un bouton “Mes Bookmarks” qui permettront de les afficher dans la zone de droite. En te rendant sur la page d’autres membres du site, tu pourras également parcourir leurs favoris et les Bookmarks qu’ils ont posté !
          </p>
          <h2 className="infos_title_abstract">Est-il possible de voter pour un Bookmark ?</h2>
          <p className="infos_abstract">
            Oui, il te suffit sur la page du Bookmark de cliquer sur les flèches vers le haut ou vers le bas et ainsi ton vote sera pris en compte. Si tu changes d’avis, tu peux cliquer sur la flèche en sens inverse pour annuler ton vote actuel. Il te sera ensuite tout à fait possible de soumettre un nouveau vote !
          </p>
          <h2 className="infos_title_abstract">A quoi servent les “Kiem Tao” ?</h2>
          <p className="infos_abstract">
            Les “Kiem Tao” sont un type d’annonce que les professeurs peuvent utiliser pour connaître vos impressions en quelques mots, sur ce que vous avez retenu ou compris, sur une saison ou une notion en particulier.
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
