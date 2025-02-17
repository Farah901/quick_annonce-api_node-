import i18n from 'i18next';
import { initReactI18next } from 'react-i18next';

i18n.use(initReactI18next).init({
  resources: {
    en: {
      translation: {
        title: "Easily find what you need or sell what you no longer use with just one click!",
        buyNow: "Buy Now",
        welcome: "Welcome to Quick Announce",
        description: "Quick Announce is the perfect place to buy and sell easily. Our platform helps you connect with buyers and sellers quickly and efficiently. Whether you're looking for electronics, fashion, or home items, we've got you covered!",
        postAd: "+ Post an Ad"
      }
    },
    fr: {
      translation: {
        title: "Trouvez facilement ce dont vous avez besoin ou vendez ce que vous n'utilisez plus en un seul clic !",
        buyNow: "Acheter maintenant",
        welcome: "Bienvenue sur Quick Announce",
        description: "Quick Announce est l'endroit idéal pour acheter et vendre facilement. Notre plateforme vous aide à entrer en contact avec des acheteurs et des vendeurs rapidement et efficacement. Que vous recherchiez de l'électronique, de la mode ou des articles pour la maison, nous avons ce qu'il vous faut !",
        postAd: "+ Publier une annonce"
      }
    },
    es: {
      translation: {
        title: "¡Encuentra fácilmente lo que necesitas o vende lo que ya no usas con un solo clic!",
        buyNow: "Comprar ahora",
        welcome: "Bienvenido a Quick Announce",
        description: "Quick Announce es el lugar perfecto para comprar y vender fácilmente. Nuestra plataforma te ayuda a conectar con compradores y vendedores de manera rápida y eficiente. Ya sea que busques electrónicos, moda o artículos para el hogar, ¡tenemos lo que necesitas!",
        postAd: "+ Publicar un anuncio"
      }
    }
  },
  lng: "en", // Langue par défaut
  fallbackLng: "en",
  interpolation: { escapeValue: false }
});

export default i18n;
