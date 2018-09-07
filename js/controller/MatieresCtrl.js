app.controller('MatieresCtrl', ['$scope', '$http', function($scope, $http) {
    /*$scope.niveau = $scope.niveau === undefined?"":$scope.niveau;*/
    console.log("utilisation du controlleur ");
   

    $scope.searchFichiers = function(matiere, type){
        console.log("la focntion a bien été lancée");
        //var url = "https://desfichesdescartes.fr/appli/data.json";
        //var url = "https://desfichesdescartes.fr/appli/liste.php?matiere=" + matiere + "&type=" + type;
		var url = "http://test.desfichesdescartes/appli/liste.php?matiere=" + matiere + "&type=" + type;
        $http.get(url).then(httpSuccessFichiers, function(error){
            alert("Impossible de récupérer la liste des fichiers");
        });
    }

    httpSuccessFichiers = function(response){
        console.log("la requete a bien été reçue");
        //console.log(response.data.fichiers);
        $.each(response.data.fichiers,function(index,f){
            console.log(f.nom);
            $("#liste").append('<div class="case"><a href="' + f.url + '"><img src="' + f.image + '" alt="probleme" class="miniature" /><div class="nomFichier">' + f.nom + '</div></a></div>')
        });
        for(f in response.data.fichiers){
            
            console.log(f.nom);
            //$("#liste").html('<div class="case"><a href="' + f.url + '"><img src="' + f.image + '" alt="probleme" class="miniature" /><div class="nomFichier">' + f.nom + '</div></a></div>')
        }
        //$scope.myData = response;
    }
    
    $scope.getMatiere = function(niveau){
        console.log("la fonction getMatieres est appelée");
        setTimeout(function(){
            var ensemble = document.querySelectorAll(".lotMatieres");
            for (i = 0; i < ensemble.length; ++i) {
                ensemble[i].style = "display: none; color: red";
            }
            var select = document.getElementById(niveau);
            select.style = "display: block";
          }, 100);
        
    }


    //$http = http;

    //$scope.search();

    //$scope.matiere = "MLJ1E22O";
    //$scope.type = "indifférent";

    

}]);
