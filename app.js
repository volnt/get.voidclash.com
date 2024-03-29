var app = angular.module("app", ["pascalprecht.translate"]);

app.controller("IndexCtrl", function($scope, $http, $translate) {

  $scope.lang = {
    value: 'en',
    set: function (val) {
      this.value = val;
      $translate.use(val);
    },
  };

  $scope.region = {
    value: 'eu',
    set: function (val) {
      this.value = val;
      $translate.use(val);
    },
  };
});

app.config(function ($translateProvider) {
  $translateProvider.translations('en', {
    lang: {
      fr: "fr",
      en: "en",
    },
    download: {
      mtitle: "Void Clash &#151; Download the alpha",
      title: "Download the alpha",
      subtitle: "You can choose a mirror between <strong>America</strong>, <strong>Europe</strong> and <strong>Asia</strong> following your position",
      date: "Available today at 8pm GMT/UTC+1 !"
    },
    server: {
      eu: "Europe",
      am: "America (north)",
      as: "Asia",
    }
});

$translateProvider.translations('fr', {
  lang: {
    fr: "fr",
    en: "en",
  },
    download: {
      mtitle: "Void Clash &#151; Téléchargez l'alpha",
      title: "Téléchargez l'alpha",
      subtitle: "Selectionnez un serveur de téléchargement parmi <strong>Amerique</strong>, <strong>Europe</strong> et <strong>Asie</strong> selon votre location",
      date: "Disponible en téléchargement aujourd'hui dès 20h !"
    },
    server: {
      eu: "Europe",
      am: "Amerique (nord)",
      as: "Asie",
    }
});

$translateProvider.preferredLanguage('en');
});
