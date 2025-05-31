const countriesData = {
    "Afrique": {
        "colorClass": "black",
        "regions": [
            {
                name: "Afrique du Nord",
                countries: [
                    { country: "Algérie", capital: "Alger", flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Algeria.svg" },
                    { country: "Égypte", capital: "Le Caire", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Egypt.svg" },
                    { country: "Libye", capital: "Tripoli", flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Libya.svg" },
                    { country: "Maroc", capital: "Rabat", flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Morocco.svg" },
                    { country: "Mauritanie", capital: "Nouakchott", flag: "https://upload.wikimedia.org/wikipedia/commons/4/43/Flag_of_Mauritania.svg" },
                    { country: "Soudan", capital: "Khartoum", flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Sudan.svg" },
                    { country: "Tunisie", capital: "Tunis", flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Tunisia.svg" }
                ]
            },
            {
                name: "Afrique de l'Ouest",
                countries: [
                    { country: "Bénin", capital: "Porto-Novo", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Benin.svg" },
                    { country: "Burkina Faso", capital: "Ouagadougou", flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Burkina_Faso.svg" },
                    { country: "Cap-Vert", capital: "Praia", flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Cape_Verde.svg" },
                    { country: "Côte d'Ivoire", capital: "Yamoussoukro", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Côte_d%27Ivoire.svg" },
                    { country: "Gambie", capital: "Banjul", flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_The_Gambia.svg" },
                    { country: "Ghana", capital: "Accra", flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Ghana.svg" },
                    { country: "Guinée", capital: "Conakry", flag: "https://upload.wikimedia.org/wikipedia/commons/e/ed/Flag_of_Guinea.svg" },
                    { country: "Guinée-Bissau", capital: "Bissau", flag: "https://upload.wikimedia.org/wikipedia/commons/0/01/Flag_of_Guinea-Bissau.svg" },
                    { country: "Liberia", capital: "Monrovia", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b8/Flag_of_Liberia.svg" },
                    { country: "Mali", capital: "Bamako", flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_Mali.svg" },
                    { country: "Niger", capital: "Niamey", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f4/Flag_of_Niger.svg" },
                    { country: "Nigeria", capital: "Abuja", flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_Nigeria.svg" },
                    { country: "Sénégal", capital: "Dakar", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fd/Flag_of_Senegal.svg" },
                    { country: "Sierra Leone", capital: "Freetown", flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Sierra_Leone.svg" },
                    { country: "Togo", capital: "Lomé", flag: "https://upload.wikimedia.org/wikipedia/commons/6/68/Flag_of_Togo.svg" }
                ]
            },
            {
                name: "Afrique Centrale",
                countries: [
                    { country: "Angola", capital: "Luanda", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9d/Flag_of_Angola.svg" },
                    { country: "Cameroun", capital: "Yaoundé", flag: "https://upload.wikimedia.org/wikipedia/commons/4/4f/Flag_of_Cameroon.svg" },
                    { country: "République centrafricaine", capital: "Bangui", flag: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Central_African_Republic.svg" },
                    { country: "Tchad", capital: "N'Djaména", flag: "https://upload.wikimedia.org/wikipedia/commons/4/4b/Flag_of_Chad.svg" },
                    { country: "Congo (Rép. du Congo)", capital: "Brazzaville", flag: "https://upload.wikimedia.org/wikipedia/commons/9/92/Flag_of_the_Republic_of_the_Congo.svg" },
                    { country: "RD Congo (Rép. dém. du Congo)", capital: "Kinshasa", flag: "https://upload.wikimedia.org/wikipedia/commons/6/6f/Flag_of_the_Democratic_Republic_of_the_Congo.svg" },
                    { country: "Guinée équatoriale", capital: "Malabo", flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Equatorial_Guinea.svg" },
                    { country: "Gabon", capital: "Libreville", flag: "https://upload.wikimedia.org/wikipedia/commons/0/04/Flag_of_Gabon.svg" },
                    { country: "Sao Tomé-et-Principe", capital: "São Tomé", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_S%C3%A3o_Tom%C3%A9_and_Pr%C3%ADncipe.svg" }
                ]
            },
            {
                name: "Afrique de l'Est",
                countries: [
                    { country: "Burundi", capital: "Gitega", flag: "https://upload.wikimedia.org/wikipedia/commons/5/50/Flag_of_Burundi.svg" },
                    { country: "Comores", capital: "Moroni", flag: "https://upload.wikimedia.org/wikipedia/commons/9/94/Flag_of_the_Comoros.svg" },
                    { country: "Djibouti", capital: "Djibouti (ville)", flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_Djibouti.svg" },
                    { country: "Érythrée", capital: "Asmara", flag: "https://upload.wikimedia.org/wikipedia/commons/2/29/Flag_of_Eritrea.svg" },
                    { country: "Éthiopie", capital: "Addis-Abeba", flag: "https://upload.wikimedia.org/wikipedia/commons/7/71/Flag_of_Ethiopia.svg" },
                    { country: "Kenya", capital: "Nairobi", flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Kenya.svg" },
                    { country: "Madagascar", capital: "Antananarivo", flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Madagascar.svg" },
                    { country: "Malawi", capital: "Lilongwe", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d1/Flag_of_Malawi.svg" },
                    { country: "Maurice", capital: "Port-Louis", flag: "https://upload.wikimedia.org/wikipedia/commons/7/77/Flag_of_Mauritius.svg" },
                    { country: "Mozambique", capital: "Maputo", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Mozambique.svg" },
                    { country: "Rwanda", capital: "Kigali", flag: "https://upload.wikimedia.org/wikipedia/commons/1/17/Flag_of_Rwanda.svg" },
                    { country: "Seychelles", capital: "Victoria", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Seychelles.svg" },
                    { country: "Somalie", capital: "Mogadiscio", flag: "https://upload.wikimedia.org/wikipedia/commons/a/a0/Flag_of_Somalia.svg" },
                    { country: "Soudan du Sud", capital: "Juba", flag: "https://upload.wikimedia.org/wikipedia/commons/7/7a/Flag_of_South_Sudan.svg" },
                    { country: "Tanzanie", capital: "Dodoma", flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tanzania.svg" },
                    { country: "Ouganda", capital: "Kampala", flag: "https://upload.wikimedia.org/wikipedia/commons/4/4e/Flag_of_Uganda.svg" }
                ]
            },
            {
                name: "Afrique Australe",
                countries: [
                    { country: "Afrique du Sud", capital: "Pretoria", flag: "https://upload.wikimedia.org/wikipedia/commons/a/af/Flag_of_South_Africa.svg" },
                    { country: "Botswana", capital: "Gaborone", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_Botswana.svg" },
                    { country: "Eswatini (Swaziland)", capital: "Mbabane", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fb/Flag_of_Eswatini.svg" },
                    { country: "Lesotho", capital: "Maseru", flag: "https://upload.wikimedia.org/wikipedia/commons/4/4a/Flag_of_Lesotho.svg" },
                    { country: "Namibie", capital: "Windhoek", flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Namibia.svg" },
                    { country: "Zambie", capital: "Lusaka", flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Zambia.svg" },
                    { country: "Zimbabwe", capital: "Harare", flag: "https://upload.wikimedia.org/wikipedia/commons/6/6a/Flag_of_Zimbabwe.svg" }
                ]
            }
        ]
    },
    "Amérique": {
        "colorClass": "red",
        "regions": [
            {
                name: "Amérique du Nord",
                countries: [
                    { country: "Antigua-et-Barbuda", capital: "Saint John's", flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Antigua_and_Barbuda.svg" },
                    { country: "Bahamas", capital: "Nassau", flag: "https://upload.wikimedia.org/wikipedia/commons/9/93/Flag_of_the_Bahamas.svg" },
                    { country: "Barbade", capital: "Bridgetown", flag: "https://upload.wikimedia.org/wikipedia/commons/e/ef/Flag_of_Barbados.svg" },
                    { country: "Belize", capital: "Belmopan", flag: "https://upload.wikimedia.org/wikipedia/commons/e/e7/Flag_of_Belize.svg" },
                    { country: "Canada", capital: "Ottawa", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Canada_%28Pantone%29.svg" },
                    { country: "Costa Rica", capital: "San José", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f2/Flag_of_Costa_Rica.svg" },
                    { country: "Cuba", capital: "La Havane", flag: "https://upload.wikimedia.org/wikipedia/commons/b/bd/Flag_of_Cuba.svg" },
                    { country: "Dominique", capital: "Roseau", flag: "https://upload.wikimedia.org/wikipedia/commons/c/c4/Flag_of_Dominica.svg" },
                    { country: "République dominicaine", capital: "Saint-Domingue", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_the_Dominican_Republic.svg" },
                    { country: "Salvador", capital: "San Salvador", flag: "https://upload.wikimedia.org/wikipedia/commons/3/34/Flag_of_El_Salvador.svg" },
                    { country: "Grenade", capital: "Saint George's", flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Grenada.svg" },
                    { country: "Guatemala", capital: "Guatemala (ville)", flag: "https://upload.wikimedia.org/wikipedia/commons/e/ec/Flag_of_Guatemala.svg" },
                    { country: "Haïti", capital: "Port-au-Prince", flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Haiti.svg" },
                    { country: "Honduras", capital: "Tegucigalpa", flag: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Honduras_%282022-%29.svg" },
                    { country: "Jamaïque", capital: "Kingston", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0a/Flag_of_Jamaica.svg" },
                    { country: "Mexique", capital: "Mexico", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fc/Flag_of_Mexico.svg" },
                    { country: "Nicaragua", capital: "Managua", flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Nicaragua.svg" },
                    { country: "Panama", capital: "Panama (ville)", flag: "https://upload.wikimedia.org/wikipedia/commons/a/ab/Flag_of_Panama.svg" },
                    { country: "Saint-Christophe-et-Niévès", capital: "Basseterre", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Saint_Kitts_and_Nevis.svg" },
                    { country: "Sainte-Lucie", capital: "Castries", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Saint_Lucia.svg" },
                    { country: "Saint-Vincent-et-les-Grenadines", capital: "Kingstown", flag: "https://upload.wikimedia.org/wikipedia/commons/6/6d/Flag_of_Saint_Vincent_and_the_Grenadines.svg" },
                    { country: "Trinité-et-Tobago", capital: "Port-d'Espagne", flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Trinidad_and_Tobago.svg" },
                    { country: "États-Unis", capital: "Washington D.C.", flag: "https://upload.wikimedia.org/wikipedia/commons/a/a4/Flag_of_the_United_States.svg" }
                ]
            },
            {
                name: "Amérique du Sud",
                countries: [
                    { country: "Argentine", capital: "Buenos Aires", flag: "https://upload.wikimedia.org/wikipedia/commons/1/1a/Flag_of_Argentina.svg" },
                    { country: "Bolivie", capital: "Sucre (constitutionnelle), La Paz (administrative)", flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Bolivia.svg" },
                    { country: "Brésil", capital: "Brasília", flag: "https://upload.wikimedia.org/wikipedia/commons/0/05/Flag_of_Brazil.svg" },
                    { country: "Chili", capital: "Santiago", flag: "https://upload.wikimedia.org/wikipedia/commons/7/78/Flag_of_Chile.svg" },
                    { country: "Colombie", capital: "Bogota", flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Colombia.svg" },
                    { country: "Équateur", capital: "Quito", flag: "https://upload.wikimedia.org/wikipedia/commons/e/e8/Flag_of_Ecuador.svg" },
                    { country: "Guyana", capital: "Georgetown", flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_Guyana.svg" },
                    { country: "Paraguay", capital: "Asunción", flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Paraguay.svg" },
                    { country: "Pérou", capital: "Lima", flag: "https://upload.wikimedia.org/wikipedia/commons/c/cf/Flag_of_Peru.svg" },
                    { country: "Suriname", capital: "Paramaribo", flag: "https://upload.wikimedia.org/wikipedia/commons/6/60/Flag_of_Suriname.svg" },
                    { country: "Uruguay", capital: "Montevideo", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fe/Flag_of_Uruguay.svg" },
                    { country: "Venezuela", capital: "Caracas", flag: "https://upload.wikimedia.org/wikipedia/commons/0/06/Flag_of_Venezuela.svg" }
                ]
            }
        ]
    },
    "Asie": {
        "colorClass": "yellow",
        "regions": [
            {
                name: "Asie de l'Est",
                countries: [
                    { country: "Chine", capital: "Pékin", flag: "https://upload.wikimedia.org/wikipedia/commons/f/fa/Flag_of_the_People%27s_Republic_of_China.svg" },
                    { country: "Corée du Nord", capital: "Pyongyang", flag: "https://upload.wikimedia.org/wikipedia/commons/5/51/Flag_of_North_Korea.svg" },
                    { country: "Corée du Sud", capital: "Séoul", flag: "https://upload.wikimedia.org/wikipedia/commons/0/09/Flag_of_South_Korea.svg" },
                    { country: "Japon", capital: "Tokyo", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9e/Flag_of_Japan.svg" },
                    { country: "Mongolie", capital: "Oulan-Bator", flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Mongolia.svg" },
                    { country: "Taïwan", capital: "Taipei", flag: "https://upload.wikimedia.org/wikipedia/commons/7/72/Flag_of_the_Republic_of_China.svg" }
                ]
            },
            {
                name: "Asie du Sud",
                countries: [
                    { country: "Afghanistan", capital: "Kaboul", flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_the_Taliban.svg" },
                    { country: "Bangladesh", capital: "Dacca", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f9/Flag_of_Bangladesh.svg" },
                    { country: "Bhoutan", capital: "Thimphou", flag: "https://upload.wikimedia.org/wikipedia/commons/9/91/Flag_of_Bhutan.svg" },
                    { country: "Inde", capital: "New Delhi", flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_India.svg" },
                    { country: "Maldives", capital: "Malé", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Maldives.svg" },
                    { country: "Népal", capital: "Katmandou", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9b/Flag_of_Nepal.svg" },
                    { country: "Pakistan", capital: "Islamabad", flag: "https://upload.wikimedia.org/wikipedia/commons/3/32/Flag_of_Pakistan.svg" },
                    { country: "Sri Lanka", capital: "Sri Jayawardenapura Kotte", flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Sri_Lanka.svg" }
                ]
            },
            {
                name: "Asie du Sud-Est",
                countries: [
                    { country: "Birmanie (Myanmar)", capital: "Naypyidaw", flag: "https://upload.wikimedia.org/wikipedia/commons/8/8c/Flag_of_Myanmar.svg" },
                    { country: "Brunei", capital: "Bandar Seri Begawan", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Brunei.svg" },
                    { country: "Cambodge", capital: "Phnom Penh", flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_Cambodia.svg" },
                    { country: "Indonésie", capital: "Jakarta", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9f/Flag_of_Indonesia.svg" },
                    { country: "Laos", capital: "Vientiane", flag: "https://upload.wikimedia.org/wikipedia/commons/5/56/Flag_of_Laos.svg" },
                    { country: "Malaisie", capital: "Kuala Lumpur", flag: "https://upload.wikimedia.org/wikipedia/commons/6/66/Flag_of_Malaysia.svg" },
                    { country: "Philippines", capital: "Manille", flag: "https://upload.wikimedia.org/wikipedia/commons/9/99/Flag_of_the_Philippines.svg" },
                    { country: "Singapour", capital: "Singapour", flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Singapore.svg" },
                    { country: "Thaïlande", capital: "Bangkok", flag: "https://upload.wikimedia.org/wikipedia/commons/a/a9/Flag_of_Thailand.svg" },
                    { country: "Timor oriental", capital: "Dili", flag: "https://upload.wikimedia.org/wikipedia/commons/2/26/Flag_of_East_Timor.svg" },
                    { country: "Vietnam", capital: "Hanoï", flag: "https://upload.wikimedia.org/wikipedia/commons/2/21/Flag_of_Vietnam.svg" }
                ]
            },
            {
                name: "Asie Centrale",
                countries: [
                    { country: "Kazakhstan", capital: "Astana", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kazakhstan.svg" },
                    { country: "Kirghizistan", capital: "Bichkek", flag: "https://upload.wikimedia.org/wikipedia/commons/c/c7/Flag_of_Kyrgyzstan.svg" },
                    { country: "Ouzbékistan", capital: "Tachkent", flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Uzbekistan.svg" },
                    { country: "Tadjikistan", capital: "Douchanbé", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d0/Flag_of_Tajikistan.svg" },
                    { country: "Turkménistan", capital: "Achgabat", flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Turkmenistan.svg" }
                ]
            },
            {
                name: "Asie de l'Ouest (Moyen-Orient)",
                countries: [
                    { country: "Arabie saoudite", capital: "Riyad", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0d/Flag_of_Saudi_Arabia.svg" },
                    { country: "Arménie", capital: "Erevan", flag: "https://upload.wikimedia.org/wikipedia/commons/2/2f/Flag_of_Armenia.svg" },
                    { country: "Azerbaïdjan", capital: "Bakou", flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Azerbaijan.svg" },
                    { country: "Bahreïn", capital: "Manama", flag: "https://upload.wikimedia.org/wikipedia/commons/2/2c/Flag_of_Bahrain.svg" },
                    { country: "Chypre", capital: "Nicosie", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Cyprus.svg" },
                    { country: "Émirats arabes unis", capital: "Abou Dabi", flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_United_Arab_Emirates.svg" },
                    { country: "Géorgie", capital: "Tbilissi", flag: "https://upload.wikimedia.org/wikipedia/commons/0/0f/Flag_of_Georgia.svg" },
                    { country: "Irak", capital: "Bagdad", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f6/Flag_of_Iraq.svg" },
                    { country: "Iran", capital: "Téhéran", flag: "https://upload.wikimedia.org/wikipedia/commons/c/ca/Flag_of_Iran.svg" },
                    { country: "Israël", capital: "Jérusalem", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d4/Flag_of_Israel.svg" },
                    { country: "Jordanie", capital: "Amman", flag: "https://upload.wikimedia.org/wikipedia/commons/c/c0/Flag_of_Jordan.svg" },
                    { country: "Koweït", capital: "Koweït (ville)", flag: "https://upload.wikimedia.org/wikipedia/commons/a/aa/Flag_of_Kuwait.svg" },
                    { country: "Liban", capital: "Beyrouth", flag: "https://upload.wikimedia.org/wikipedia/commons/5/59/Flag_of_Lebanon.svg" },
                    { country: "Oman", capital: "Mascate", flag: "https://upload.wikimedia.org/wikipedia/commons/d/dd/Flag_of_Oman.svg" },
                    { country: "Palestine", capital: "Jérusalem-Est (revendiquée), Ramallah (siège administratif)", flag: "https://upload.wikimedia.org/wikipedia/commons/0/00/Flag_of_Palestine.svg" },
                    { country: "Qatar", capital: "Doha", flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Qatar.svg" },
                    { country: "Syrie", capital: "Damas", flag: "https://upload.wikimedia.org/wikipedia/commons/5/54/Flag_of_Syria_%282025-%29.svg" },
                    { country: "Turquie", capital: "Ankara", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b4/Flag_of_Turkey.svg" },
                    { country: "Yémen", capital: "Sanaa", flag: "https://upload.wikimedia.org/wikipedia/commons/8/89/Flag_of_Yemen.svg" }
                ]
            }
        ]
    },
    "Europe": {
        "colorClass": "blue",
        "regions": [
            {
                name: "Europe de l'Ouest",
                countries: [
                    { country: "Allemagne", capital: "Berlin", flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Germany.svg" },
                    { country: "Autriche", capital: "Vienne", flag: "https://upload.wikimedia.org/wikipedia/commons/4/41/Flag_of_Austria.svg" },
                    { country: "Belgique", capital: "Bruxelles", flag: "https://upload.wikimedia.org/wikipedia/commons/6/65/Flag_of_Belgium.svg" },
                    { country: "France", capital: "Paris", flag: "https://upload.wikimedia.org/wikipedia/commons/c/c3/Flag_of_France.svg" },
                    { country: "Irlande", capital: "Dublin", flag: "https://upload.wikimedia.org/wikipedia/commons/4/45/Flag_of_Ireland.svg" },
                    { country: "Liechtenstein", capital: "Vaduz", flag: "https://upload.wikimedia.org/wikipedia/commons/4/47/Flag_of_Liechtenstein.svg" },
                    { country: "Luxembourg", capital: "Luxembourg", flag: "https://upload.wikimedia.org/wikipedia/commons/d/da/Flag_of_Luxembourg.svg" },
                    { country: "Monaco", capital: "Monaco", flag: "https://upload.wikimedia.org/wikipedia/commons/e/ea/Flag_of_Monaco.svg" },
                    { country: "Pays-Bas", capital: "Amsterdam", flag: "https://upload.wikimedia.org/wikipedia/commons/2/20/Flag_of_the_Netherlands.svg" },
                    { country: "Royaume-Uni", capital: "Londres", flag: "https://upload.wikimedia.org/wikipedia/commons/8/83/Flag_of_the_United_Kingdom_%283-5%29.svg" },
                    { country: "Suisse", capital: "Berne", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Switzerland.svg" }
                ]
            },
            {
                name: "Europe de l'Est",
                countries: [
                    { country: "Albanie", capital: "Tirana", flag: "https://upload.wikimedia.org/wikipedia/commons/3/36/Flag_of_Albania.svg" },
                    { country: "Biélorussie", capital: "Minsk", flag: "https://upload.wikimedia.org/wikipedia/commons/8/85/Flag_of_Belarus.svg" },
                    { country: "Bosnie-Herzégovine", capital: "Sarajevo", flag: "https://upload.wikimedia.org/wikipedia/commons/b/bf/Flag_of_Bosnia_and_Herzegovina.svg" },
                    { country: "Bulgarie", capital: "Sofia", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Bulgaria.svg" },
                    { country: "Croatie", capital: "Zagreb", flag: "https://upload.wikimedia.org/wikipedia/commons/1/1b/Flag_of_Croatia.svg" },
                    { country: "Estonie", capital: "Tallinn", flag: "https://upload.wikimedia.org/wikipedia/commons/8/8f/Flag_of_Estonia.svg" },
                    { country: "Hongrie", capital: "Budapest", flag: "https://upload.wikimedia.org/wikipedia/commons/c/c1/Flag_of_Hungary.svg" },
                    { country: "Kosovo", capital: "Pristina", flag: "https://upload.wikimedia.org/wikipedia/commons/1/1f/Flag_of_Kosovo.svg" },
                    { country: "Lettonie", capital: "Riga", flag: "https://upload.wikimedia.org/wikipedia/commons/8/84/Flag_of_Latvia.svg" },
                    { country: "Lituanie", capital: "Vilnius", flag: "https://upload.wikimedia.org/wikipedia/commons/1/11/Flag_of_Lithuania.svg" },
                    { country: "Macédoine du Nord", capital: "Skopje", flag: "https://upload.wikimedia.org/wikipedia/commons/7/79/Flag_of_North_Macedonia.svg" },
                    { country: "Moldavie", capital: "Chișinău", flag: "https://upload.wikimedia.org/wikipedia/commons/2/27/Flag_of_Moldova.svg" },
                    { country: "Monténégro", capital: "Podgorica", flag: "https://upload.wikimedia.org/wikipedia/commons/6/64/Flag_of_Montenegro.svg" },
                    { country: "Pologne", capital: "Varsovie", flag: "https://upload.wikimedia.org/wikipedia/commons/1/12/Flag_of_Poland.svg" },
                    { country: "République tchèque", capital: "Prague", flag: "https://upload.wikimedia.org/wikipedia/commons/c/cb/Flag_of_the_Czech_Republic.svg" },
                    { country: "Roumanie", capital: "Bucarest", flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Romania.svg" },
                    { country: "Russie", capital: "Moscou", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f3/Flag_of_Russia.svg" },
                    { country: "Serbie", capital: "Belgrade", flag: "https://upload.wikimedia.org/wikipedia/commons/f/ff/Flag_of_Serbia.svg" },
                    { country: "Slovaquie", capital: "Bratislava", flag: "https://upload.wikimedia.org/wikipedia/commons/e/e6/Flag_of_Slovakia.svg" },
                    { country: "Slovénie", capital: "Ljubljana", flag: "https://upload.wikimedia.org/wikipedia/commons/f/f0/Flag_of_Slovenia.svg" },
                    { country: "Ukraine", capital: "Kiev", flag: "https://upload.wikimedia.org/wikipedia/commons/4/49/Flag_of_Ukraine.svg" }
                ]
            },
            {
                name: "Europe du Nord",
                countries: [
                    { country: "Danemark", capital: "Copenhague", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9c/Flag_of_Denmark.svg" },
                    { country: "Finlande", capital: "Helsinki", flag: "https://upload.wikimedia.org/wikipedia/commons/b/bc/Flag_of_Finland.svg" },
                    { country: "Islande", capital: "Reykjavik", flag: "https://upload.wikimedia.org/wikipedia/commons/c/ce/Flag_of_Iceland.svg" },
                    { country: "Norvège", capital: "Oslo", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d9/Flag_of_Norway.svg" },
                    { country: "Suède", capital: "Stockholm", flag: "https://upload.wikimedia.org/wikipedia/commons/4/4c/Flag_of_Sweden.svg" }
                ]
            },
            {
                name: "Europe du Sud",
                countries: [
                    { country: "Andorre", capital: "Andorre-la-Vieille", flag: "https://upload.wikimedia.org/wikipedia/commons/1/19/Flag_of_Andorra.svg" },
                    { country: "Espagne", capital: "Madrid", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Spain.svg" },
                    { country: "Grèce", capital: "Athènes", flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Greece.svg" },
                    { country: "Italie", capital: "Rome", flag: "https://upload.wikimedia.org/wikipedia/commons/0/03/Flag_of_Italy.svg" },
                    { country: "Malte", capital: "La Valette", flag: "https://upload.wikimedia.org/wikipedia/commons/7/73/Flag_of_Malta.svg" },
                    { country: "Portugal", capital: "Lisbonne", flag: "https://upload.wikimedia.org/wikipedia/commons/5/5c/Flag_of_Portugal.svg" },
                    { country: "Saint-Marin", capital: "Saint-Marin", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b1/Flag_of_San_Marino.svg" },
                    { country: "Vatican", capital: "Cité du Vatican", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b3/Flag_of_Vatican_City_%282023%E2%80%93present%29.svg" }
                ]
            }
        ]
    },
    "Océanie": {
        "colorClass": "green",
        "regions": [
            {
                name: "Océanie",
                countries: [
                    { country: "Australie", capital: "Canberra", flag: "https://upload.wikimedia.org/wikipedia/commons/b/b9/Flag_of_Australia.svg" },
                    { country: "Fidji", capital: "Suva", flag: "https://upload.wikimedia.org/wikipedia/commons/b/ba/Flag_of_Fiji.svg" },
                    { country: "Kiribati", capital: "Tarawa-Sud", flag: "https://upload.wikimedia.org/wikipedia/commons/d/d3/Flag_of_Kiribati.svg" },
                    { country: "Îles Marshall", capital: "Majuro", flag: "https://upload.wikimedia.org/wikipedia/commons/2/2e/Flag_of_the_Marshall_Islands.svg" },
                    { country: "Micronésie", capital: "Palikir", flag: "https://upload.wikimedia.org/wikipedia/commons/e/e4/Flag_of_the_Federated_States_of_Micronesia.svg" },
                    { country: "Nauru", capital: "Yaren", flag: "https://upload.wikimedia.org/wikipedia/commons/3/30/Flag_of_Nauru.svg" },
                    { country: "Nouvelle-Zélande", capital: "Wellington", flag: "https://upload.wikimedia.org/wikipedia/commons/3/3e/Flag_of_New_Zealand.svg" },
                    { country: "Palaos", capital: "Ngerulmud", flag: "https://upload.wikimedia.org/wikipedia/commons/4/48/Flag_of_Palau.svg" },
                    { country: "Papouasie-Nouvelle-Guinée", capital: "Port Moresby", flag: "https://upload.wikimedia.org/wikipedia/commons/e/e3/Flag_of_Papua_New_Guinea.svg" },
                    { country: "Samoa", capital: "Apia", flag: "https://upload.wikimedia.org/wikipedia/commons/3/31/Flag_of_Samoa.svg" },
                    { country: "Îles Salomon", capital: "Honiara", flag: "https://upload.wikimedia.org/wikipedia/commons/7/74/Flag_of_the_Solomon_Islands.svg" },
                    { country: "Tonga", capital: "Nuku'alofa", flag: "https://upload.wikimedia.org/wikipedia/commons/9/9a/Flag_of_Tonga.svg" },
                    { country: "Tuvalu", capital: "Funafuti", flag: "https://upload.wikimedia.org/wikipedia/commons/3/38/Flag_of_Tuvalu.svg" },
                    { country: "Vanuatu", capital: "Port-Vila", flag: "https://upload.wikimedia.org/wikipedia/commons/6/6e/Flag_of_Vanuatu_%28official%29.svg" }
                ]
            }
        ]
    }
};

let currentCountries = [];
let currentIndex = 0;

const flashcardContainer = document.getElementById('flashcard-container');
const flashcard = document.getElementById('flashcard');
const flashcardFront = document.getElementById('flashcard-front');
const flashcardBack = document.getElementById('flashcard-back');
const flashcardText = document.getElementById('flashcard-text');
const flashcardCapitalText = document.getElementById('flashcard-capital-text');
const progressText = document.getElementById('progress');
const completionMessage = document.getElementById('completion-message');

const continentSelectionDiv = document.getElementById('continent-selection');
const regionSelectionDiv = document.getElementById('region-selection');
const selectionMessage = document.getElementById('selection-message');

const backToMenuButton = document.getElementById('back-to-menu-button');

// Variable pour suivre l'état de la carte (0 = non retournée (pays), 1 = retournée (capitale))
let cardState = 0;

// Initialisation des écouteurs d'événements
flashcard.addEventListener('click', handleCardClick);
backToMenuButton.addEventListener('click', showContinentSelection);

function handleCardClick() {
    if (cardState === 0) {
        // Premier clic : retourner la carte pour montrer la capitale
        flipFlashcard();
        cardState = 1; // La carte est maintenant retournée
    } else {
        // Deuxième clic : passer au pays suivant
        // 1. Retourner la carte côté pays (visuellement)
        flashcard.classList.remove('flashcard-flipped');

        // 2. Attendre que l'animation de retournement soit terminée
        // La durée de transition dans le CSS est 0.6s, donc la moitié (0.3s)
        // est suffisante pour que la carte soit à mi-chemin et "cachée" pour le changement.
        setTimeout(() => {
            nextFlashcard(); // Charger le nouveau pays
            cardState = 0; // La nouvelle carte n'est pas retournée
        }, 150);
    }
}

// Fonction pour générer les boutons de sélection de continent
function generateContinentButtons() {
    continentSelectionDiv.innerHTML = ''; // Nettoyer les anciens boutons

    // Bouton "Tous les pays"
    const allButton = document.createElement('button');
    allButton.textContent = "Tous les pays";
    allButton.classList.add('continent-button', 'gray'); // Couleur grise pour "Tous les pays"
    allButton.addEventListener('click', () => {
        startGame('all');
        showFlashcardView();
    });
    continentSelectionDiv.appendChild(allButton);

    for (const continentName in countriesData) {
        const continentData = countriesData[continentName];
        const button = document.createElement('button');
        button.textContent = continentName;
        button.classList.add('continent-button', continentData.colorClass);
        button.addEventListener('click', () => showRegionButtonsForContinent(continentName));
        continentSelectionDiv.appendChild(button);
    }
}

// Fonction pour afficher les boutons de région pour un continent sélectionné
function showRegionButtonsForContinent(continentName) {
    selectionMessage.textContent = `Sélectionnez une région en ${continentName} :`;
    continentSelectionDiv.style.display = 'none'; // Masquer les boutons de continent
    regionSelectionDiv.style.display = 'flex'; // Afficher le conteneur des régions

    regionSelectionDiv.innerHTML = ''; // Nettoyer les anciens boutons de région

    const continentData = countriesData[continentName];
    const continentGroup = document.createElement('div');
    continentGroup.classList.add('continent-group');
    continentGroup.innerHTML = `<h2>${continentName}</h2><div class="region-buttons-container"></div>`;
    const regionButtonsContainer = continentGroup.querySelector('.region-buttons-container');

    // Bouton "Toutes les régions de ce continent"
    const allContinentRegionsButton = document.createElement('button');
    allContinentRegionsButton.textContent = `Toutes les régions d'${continentName}`;
    allContinentRegionsButton.classList.add('region-button');
    allContinentRegionsButton.addEventListener('click', () => {
        startGame(continentName, continentName); // Passer le nom du continent deux fois
        showFlashcardView();
    });
    regionButtonsContainer.appendChild(allContinentRegionsButton);

    continentData.regions.forEach(region => {
        const button = document.createElement('button');
        button.textContent = region.name;
        button.classList.add('region-button');
        button.addEventListener('click', () => {
            startGame(region.name, continentName); // Passer le nom de la région et du continent
            showFlashcardView();
        });
        regionButtonsContainer.appendChild(button);
    });

    regionSelectionDiv.appendChild(continentGroup);

    // Ajouter un bouton pour revenir à la sélection des continents
    const backButton = document.createElement('button');
    backButton.textContent = "Retour aux continents";
    backButton.style.marginTop = '20px';
    backButton.addEventListener('click', showContinentSelection);
    regionSelectionDiv.appendChild(backButton);
}

// Fonction pour démarrer le jeu avec les pays d'une région ou de toutes les régions
function startGame(selectionIdentifier, continentName = null) {
    currentCountries = [];
    if (selectionIdentifier === 'all') {
        // Tous les pays
        for (const continent in countriesData) {
            countriesData[continent].regions.forEach(region => {
                currentCountries = currentCountries.concat(region.countries);
            });
        }
    } else if (continentName) {
        // Toutes les régions d'un continent spécifique ou une région spécifique
        const continentData = countriesData[continentName];
        if (selectionIdentifier === continentName) {
            // Toutes les régions du continent
            continentData.regions.forEach(region => {
                currentCountries = currentCountries.concat(region.countries);
            });
        } else {
            // Une région spécifique
            const selectedRegion = continentData.regions.find(r => r.name === selectionIdentifier);
            if (selectedRegion) {
                currentCountries = selectedRegion.countries;
            }
        }
    }

    shuffleArray(currentCountries);
    currentIndex = 0;
    updateFlashcard();
}

function shuffleArray(array) {
    for (let i = array.length - 1; i > 0; i--) {
        const j = Math.floor(Math.random() * (i + 1));
        [array[i], array[j]] = [array[j], array[i]];
    }
}

function updateFlashcard() {
    if (currentIndex < currentCountries.length) {
        const country = currentCountries[currentIndex];

        const existingFlagImage = flashcardFront.querySelector('.flag-image');
        if (existingFlagImage) {
            flashcardFront.removeChild(existingFlagImage);
        }

        const flagImage = document.createElement('img');
        flagImage.src = country.flag;
        flagImage.alt = `Drapeau de ${country.country}`;
        flagImage.classList.add('flag-image');
        flashcardFront.insertBefore(flagImage, flashcardText);

        flashcardText.textContent = country.country;
        flashcardCapitalText.textContent = country.capital;

        progressText.textContent = `Pays ${currentIndex + 1} / ${currentCountries.length}`;
        // Assurez-vous que la carte est sur le côté pays au début
        flashcard.classList.remove('flashcard-flipped');
        cardState = 0; // Réinitialiser l'état de la carte
        completionMessage.style.display = 'none';
        flashcard.style.display = 'flex';
    } else {
        flashcard.style.display = 'none';
        completionMessage.textContent = "Félicitations ! Vous avez terminé cette session.";
        completionMessage.style.display = 'block';
        progressText.textContent = '';
        backToMenuButton.style.display = 'inline-block';
    }
}

function flipFlashcard() {
    flashcard.classList.add('flashcard-flipped'); // Ajoute la classe pour retourner
}

// nextFlashcard est appelée après le timeout dans handleCardClick
function nextFlashcard() {
    currentIndex++;
    updateFlashcard(); // Cette fonction gère déjà la réinitialisation de l'état et le chargement
}

function showContinentSelection() {
    // Masquer tout ce qui est lié aux flashcards et aux régions
    flashcardContainer.style.display = 'none';
    flashcard.style.display = 'none';
    backToMenuButton.style.display = 'none';
    progressText.textContent = '';
    completionMessage.style.display = 'none';
    regionSelectionDiv.style.display = 'none';
    regionSelectionDiv.innerHTML = ''; // Nettoyer les régions si elles étaient affichées

    // Afficher le message de sélection et les boutons de continent
    selectionMessage.textContent = "Sélectionnez une catégorie pour commencer :";
    selectionMessage.style.display = 'block';
    continentSelectionDiv.style.display = 'flex'; // Afficher les boutons de continent
    flashcardText.textContent = "";
    flashcardCapitalText.textContent = "";
}

function showFlashcardView() {
    selectionMessage.style.display = 'none';
    continentSelectionDiv.style.display = 'none';
    regionSelectionDiv.style.display = 'none';
    flashcardContainer.style.display = 'flex';
    backToMenuButton.style.display = 'inline-block';
}

// Initialisation au chargement de la page
generateContinentButtons();
showContinentSelection(); // Afficher la sélection de continent au démarrage
