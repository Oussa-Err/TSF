export default function manifest() {
    return {
      name: 'Trinational Scientifique À L\'Étranger',
      short_name: 'TSF foundation',
      description: "Fondation des Scientifiques Marocains et à l'Etranger ce sont les chercheurs, les professeurs, les experts, les bâtisseurs et les entrepreneurs qui répondent aux formidables défis du Maroc et de l'Afrique",
      start_url: '/',
      display: 'standalone',
      background_color: '#DFD0B8',
      theme_color: '#948979',
      icons: [
        {
          src: '/favicon.ico',
          sizes: 'any',
          type: 'image/x-icon',
        },
      ],
    }
  }