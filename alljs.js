//FONDS DE CARTE
	var OpenTopoMap = L.tileLayer('https://{s}.tile.opentopomap.org/{z}/{x}/{y}.png', {
		maxZoom: 17,
		attribution: 'Map data: &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors, <a href="http://viewfinderpanoramas.org">SRTM</a> | Map style: &copy; <a href="https://opentopomap.org">OpenTopoMap</a> (<a href="https://creativecommons.org/licenses/by-sa/3.0/">CC-BY-SA</a>)'
	});
	var GeoportailFranceignMaps = L.tileLayer('https://wxs.ign.fr/{apikey}/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=GEOGRAPHICALGRIDSYSTEMS.MAPS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}', {
		attribution: '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>',
		bounds: [[-75, -180], [81, 180]],
		minZoom: 2,
		maxZoom: 18,
		apikey: 'choisirgeoportail',
		format: 'image/jpeg',
		style: 'normal'
	});
	var GeoportailFranceorthos = L.tileLayer('https://wxs.ign.fr/{apikey}/geoportail/wmts?REQUEST=GetTile&SERVICE=WMTS&VERSION=1.0.0&STYLE={style}&TILEMATRIXSET=PM&FORMAT={format}&LAYER=ORTHOIMAGERY.ORTHOPHOTOS&TILEMATRIX={z}&TILEROW={y}&TILECOL={x}', {
		attribution: '<a target="_blank" href="https://www.geoportail.gouv.fr/">Geoportail France</a>',
		bounds: [[-75, -180], [81, 180]],
		minZoom: 2,
		maxZoom: 19,
		apikey: 'choisirgeoportail',
		format: 'image/jpeg',
		style: 'normal'
	});
	var Stam = L.tileLayer('https://stamen-tiles-{s}.a.ssl.fastly.net/terrain/{z}/{x}/{y}{r}.{ext}', {
		attribution: 'Map tiles by <a href="http://stamen.com">Stamen Design</a>, <a href="http://creativecommons.org/licenses/by/3.0">CC BY 3.0</a> &mdash; Map data &copy; <a href="https://www.openstreetmap.org/copyright">OpenStreetMap</a> contributors',
		subdomains: 'abcd',
		minZoom: 0,
		maxZoom: 18,
		ext: 'png'
	});
//AJOUT COUCHES
	//Zones
		var ZN2000 = L.layerGroup();
	//Fréquentation
		var Etee11 = L.layerGroup();
		var Etee13 = L.layerGroup();
		var Etee15 = L.layerGroup();
		var Etee17 = L.layerGroup();
		var Hiver11 = L.layerGroup();
		var Hiver13 = L.layerGroup();
		var Hiver15 = L.layerGroup();
		var Hiver17 = L.layerGroup();
	//Tracés
		var an11 = L.layerGroup();
		var ja11 = L.layerGroup();
		var fe11 = L.layerGroup();
		var mr11 = L.layerGroup();
		var av11 = L.layerGroup();
		var ma11 = L.layerGroup();
		var ju11 = L.layerGroup();
		var ji11 = L.layerGroup();
		var ao11 = L.layerGroup();
		var se11 = L.layerGroup();
		var oc11 = L.layerGroup();
		var no11 = L.layerGroup();
		var de11 = L.layerGroup();
		var an13 = L.layerGroup();
		var ja13 = L.layerGroup();
		var fe13 = L.layerGroup();
		var mr13 = L.layerGroup();
		var av13 = L.layerGroup();
		var ma13 = L.layerGroup();
		var ju13 = L.layerGroup();
		var ji13 = L.layerGroup();
		var ao13 = L.layerGroup();
		var se13 = L.layerGroup();
		var oc13 = L.layerGroup();
		var no13 = L.layerGroup();
		var de13 = L.layerGroup();
		var an15 = L.layerGroup();
		var ja15 = L.layerGroup();
		var fe15 = L.layerGroup();
		var mr15 = L.layerGroup();
		var av15 = L.layerGroup();
		var ma15 = L.layerGroup();
		var ju15 = L.layerGroup();
		var ji15 = L.layerGroup();
		var ao15 = L.layerGroup();
		var se15 = L.layerGroup();
		var oc15 = L.layerGroup();
		var no15 = L.layerGroup();
		var de15 = L.layerGroup();
		var an17 = L.layerGroup();
		var ja17 = L.layerGroup();
		var fe17 = L.layerGroup();
		var mr17 = L.layerGroup();
		var av17 = L.layerGroup();
		var ma17 = L.layerGroup();
		var ju17 = L.layerGroup();
		var ji17 = L.layerGroup();
		var ao17 = L.layerGroup();
		var se17 = L.layerGroup();
		var oc17 = L.layerGroup();
		var no17 = L.layerGroup();
		var de17 = L.layerGroup();

//CARTE
	var map = L.map('map', {
		center: [47.6, -2.8],
		zoom: 11,
		minZoom: 11,
		maxZoom: 16,
		layers: [Stam, ZN2000, Etee15]
	});

//GESTION DES COUCHES
	var FDC = {
		label: 'Fonds de carte &#x1f5fa',
		children: [
			{ label: 'IGN Topo', layer: GeoportailFranceignMaps },								
			{ label: 'IGN Satellite', layer: GeoportailFranceorthos },
			{ label: 'OpenTopo', layer: OpenTopoMap },
			{ label: 'Stamen', layer: Stam },
		]
	};
	var ctl = L.control.layers.tree(FDC, null, {collapsed:false});
	ctl.addTo(map).collapseTree().expandSelected();
	var Autre = [
		{label: 'Zones Natura 2000', layer: ZN2000},
		{label: '<div class="leaflet-control-layers-separator"></div>'},
		{
			label: 'Cartes de fréquentation',
			children: [
				{ label: 'Été 2011 (maritime uniquement)', layer: Etee11 },
				{ label: 'Hiver 2011 (maritime uniquement)', layer: Hiver11 },
				{ label: 'Été 2013', layer: Etee13 },
				{ label: 'Hiver 2013', layer: Hiver13 },
				{ label: 'Été 2015', layer: Etee15 },
				{ label: 'Hiver 2015', layer: Hiver15 },
			]
		},	
		{label: '<div class="leaflet-control-layers-separator"></div>'},
		{
			label: 'Parcours des manifestations',
			children: [
				{
					label: '2011',
					children: [
						{ label: '<b>Ensemble</b>', layer: an11 },
						{ label: 'Janvier', layer: ja11 },
						{ label: 'Fevrier', layer: fe11 },
						{ label: 'Mars', layer: mr11 },
						{ label: 'Avril', layer: av11 },
						{ label: 'Mai', layer: ma11 },
						{ label: 'Juin', layer: ju11 },		
						{ label: 'Juillet', layer: ji11 },
						{ label: 'Août', layer: ao11 },
						{ label: 'Septembre', layer: se11 },
						{ label: 'Octobre', layer: oc11 },
						{ label: 'Novembre', layer: no11 },
						{ label: 'Decembre', layer: de11 },								
					]
				},
				{
					label: '2013',
					children: [
						{ label: '<b>Ensemble</b>', layer: an13 },
						{ label: 'Janvier', layer: ja13 },
						{ label: 'Fevrier', layer: fe13 },
						{ label: 'Mars', layer: mr13 },
						{ label: 'Avril', layer: av13 },
						{ label: 'Mai', layer: ma13 },
						{ label: 'Juin', layer: ju13 },		
						{ label: 'Juillet', layer: ji13 },
						{ label: 'Août', layer: ao13 },
						{ label: 'Septembre', layer: se13 },
						{ label: 'Octobre', layer: oc13 },
						{ label: 'Novembre', layer: no13 },
						{ label: 'Decembre', layer: de13 },								
					]
				},
				{
					label: '2015',
					children: [								
						{ label: '<b>Ensemble</b>', layer: an15 },
						{ label: 'Janvier', layer: ja15 },
						{ label: 'Fevrier', layer: fe15 },
						{ label: 'Mars', layer: mr15 },
						{ label: 'Avril', layer: av15 },
						{ label: 'Mai', layer: ma15 },
						{ label: 'Juin', layer: ju15 },		
						{ label: 'Juillet', layer: ji15 },
						{ label: 'Août', layer: ao15 },
						{ label: 'Septembre', layer: se15 },
						{ label: 'Octobre', layer: oc15 },
						{ label: 'Novembre', layer: no15 },
						{ label: 'Decembre', layer: de15 },								
					]
				},
			]
		},
	];
	ctl.setOverlayTree(Autre).collapseTree(true).expandSelected(true);

//GESTION GRAPHIQUE
	function modification(objet) {
		var choix = objet.value,
		array = document.querySelectorAll('.graphi');
		for (var i = 0, nb = objet.options.length; i <nb; i++) {
			if (objet.options[i].value == choix){
			array[i].style.display = "block";
			}
			else{
			array[i].style.display = "none";
			}
		}
	}
//ZONES NATURA 2000
	//Style
		function styyle(feature) {return {color: "#00FF00", weight: 1.5, fillColor: '#0B610B', fillOpacity: .5};}
		function highlightFeature(e) {
			var layer = e.target;
				layer.setStyle({weight: 3, fillOpacity: 0});
				if (!L.Browser.ie && !L.Browser.opera) {layer.bringToFront();}
		}
		function resetHighligh(e) {Golfe.resetStyle(e.target);}
	//S1 : Golfe du Morbihan
		var Golfe = L.geoJson(zonesnatura , {
			filter: function(feature, layer) {return feature.properties.nom == "Golfe du Morbihan";},
			style: styyle,
			onEachFeature: function (feature, layer) {
				layer.bindPopup('<b><center>' + feature.properties.nom + '</b></br>' + feature.properties.surf_ha + ' hectares<hr><select onchange="modification(this)"><option value="1">Nombre de participants aux manifestations terrestres</option><option value="2">Nombre de participants aux manifestations nautiques</option><option value="3">Nombre d\'embarcations aux manifestations nautiques</option><option value="5">Nombre de jours occupés par des manifestations</option><option value="6">Durée moyenne des épreuves</option><option value="7">Nombre d\'épreuves par moments de la journée</option><option value="8">Kilométrage des épreuves au sein du site et dans les communes riveraines</option></select><div class="graphi"><img class="graph" src="data/graph/S1G1.png"/></div><div class="graphi" style="display: none;"><img class="graph" src="data/graph/S1G2.png"/></div><div class="graphi" style="display: none;"><img class="graph" src="data/graph/S1G3.png"/></div><div class="graphi" style="display: none;"><img class="graph" src="data/graph/S1G5.png"/></div><div class="graphi" style="display: none;"><img class="graph" src="data/graph/S1G6.png"/></div><div class="graphi" style="display: none;"><img class="graph" src="data/graph/S1G7.png"/></div><div class="graphi" style="display: none;"><img class="graph" src="data/graph/S1G8.png"/></div></center>', {maxWidth : 450});
				layer.on({mouseover: highlightFeature,mouseout: resetHighligh,});
			},
		}).addTo(ZN2000).bindTooltip(function (layer) {return String('<b><center>' + layer.feature.properties.nom + '</b>' + '</br>Données disponibles :</center>Statistiques et cartes de fréquentation 2011 (maritimes uniquement), 2013 et 2015');});
//FREQUENTATION
	//Style
		function getColor(d) {
		return d > 150000 ? '#800026' :
			   d > 100000 ? '#BD0026' :
			   d > 50000  ? '#E31A1C' :
			   d > 25000  ? '#FC4E2A' :
			   d > 5000   ? '#FD8D3C' :
						   '#FED976';
		}
		function styyyle(feature) {return {
		fillColor: getColor(feature.properties.cor),
		weight: 0,
		opacity: 1,
		dashArray: '3',
		fillOpacity: 0.7
		};}
		function highlightFeaturee(e) {
			var layer = e.target;
				layer.setStyle({weight: 4, color: '#d1d1e0'});
				if (!L.Browser.ie && !L.Browser.opera) {layer.bringToFront();}
		}
		function resetHighlighe(e) {frr.resetStyle(e.target);}
	//Cartes
		var frr = L.geoJson(Hiv11 , {
			style: styyyle,
			onEachFeature: function (feature, layer) {layer.on({mouseover: highlightFeaturee,mouseout: resetHighlighe,});},
		}).addTo(Hiver11).bindTooltip(function (layer) {return String('<center><b>Hiver 2011</b></center><hr><b>'+ layer.feature.properties.part+' participants </b> pendant <b>'+ layer.feature.properties.dur + ' heures</b></br> soit une valeur pondérée de <b>' + layer.feature.properties.cor);});
		var frr = L.geoJson(Hiv13 , {
			style: styyyle,
			onEachFeature: function (feature, layer) {layer.on({mouseover: highlightFeaturee,mouseout: resetHighlighe,});},
		}).addTo(Hiver13).bindTooltip(function (layer) {return String('<center><b>Hiver 2013</b></center><hr><b>'+ layer.feature.properties.part+' participants </b> pendant <b>'+ layer.feature.properties.dur + ' heures</b></br> soit une valeur pondérée de <b>' + layer.feature.properties.cor);});
		var frr = L.geoJson(Hiv15 , {
			style: styyyle,
			onEachFeature: function (feature, layer) {layer.on({mouseover: highlightFeaturee,mouseout: resetHighlighe,});},
		}).addTo(Hiver15).bindTooltip(function (layer) {return String('<center><b>Hiver 2015</b></center><hr><b>'+ layer.feature.properties.part+' participants </b> pendant <b>'+ layer.feature.properties.dur + ' heures</b></br> soit une valeur pondérée de <b>' + layer.feature.properties.cor);});
		var frr = L.geoJson(Ete11 , {
			style: styyyle,
			onEachFeature: function (feature, layer) {layer.on({mouseover: highlightFeaturee,mouseout: resetHighlighe,});},
		}).addTo(Etee11).bindTooltip(function (layer) {return String('<center><b>Été 2011</b></center><hr><b>'+ layer.feature.properties.part+' participants </b> pendant <b>'+ layer.feature.properties.dur + ' heures</b></br> soit une valeur pondérée de <b>' + layer.feature.properties.cor);});
		var frr = L.geoJson(Ete13 , {
			style: styyyle,
			onEachFeature: function (feature, layer) {layer.on({mouseover: highlightFeaturee,mouseout: resetHighlighe,});},
		}).addTo(Etee13).bindTooltip(function (layer) {return String('<center><b>Été 2013</b></center><hr><b>'+ layer.feature.properties.part+' participants </b> pendant <b>'+ layer.feature.properties.dur + ' heures</b></br> soit une valeur pondérée de <b>' + layer.feature.properties.cor);});
		var frr = L.geoJson(Ete15 , {
			style: styyyle,
			onEachFeature: function (feature, layer) {layer.on({mouseover: highlightFeaturee,mouseout: resetHighlighe,});},
		}).addTo(Etee15).bindTooltip(function (layer) {return String('<center><b>Été 2015</b></center><hr><b>'+ layer.feature.properties.part+' participants </b> pendant <b>'+ layer.feature.properties.dur + ' heures</b></br> soit une valeur pondérée de <b>' + layer.feature.properties.cor);});
//PARCOURS
	//Style
		function style(feature) {return {color: "#FF0000", weight: 1};}
		function highlightFeaturetra(e) {
			var layer = e.target;
			layer.setStyle({weight: 5, color: '#666'});
			if (!L.Browser.ie && !L.Browser.opera) {layer.bringToFront();}
		}
		function resetHighlight(e) {
			ann11.resetStyle(e.target);
		}
	//Popup
		function comm(feature, layer) {
			layer.bindPopup('<b>'+'<center>' + feature.properties.nom_manif + '</b>' +'</center>'+'<hr>'+ "Date : " + feature.properties.date.substring(5, 7) + '/'+ feature.properties.date.substring(0, 4) + '<br>'+ "Participants : " + feature.properties.participan );
			layer.on({
				mouseover: highlightFeaturetra,
				mouseout: resetHighlight,
			});
		}
	//Tracés
		//2011
			var ann11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 4) == "2011";},
				style: style,
				onEachFeature: comm,
			}).addTo(an11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var jan11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2011\/01";},
				style: style,
				onEachFeature: comm,
			}).addTo(ja11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var fev11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2011\/02";},
				style: style,
				onEachFeature: comm,
			}).addTo(fe11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});							
			var mar11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2011\/03";},
				style: style,
				onEachFeature: comm,
			}).addTo(mr11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});							
			var avr11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2011\/04";},
				style: style,
				onEachFeature: comm,
			}).addTo(av11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var mai11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2011\/05";},
				style: style,
				onEachFeature: comm,
			}).addTo(ma11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var jui11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2011\/06";},
				style: style,
				onEachFeature: comm,
			}).addTo(ju11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var jue11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2011\/07";},
				style: style,
				onEachFeature: comm,
			}).addTo(ji11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var aou11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2011\/08";},
				style: style,
				onEachFeature: comm,
			}).addTo(ao11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var sep11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2011\/09";},
				style: style,
				onEachFeature: comm,
			}).addTo(se11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var oct11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2011\/10";},
				style: style,
				onEachFeature: comm,
			}).addTo(oc11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var nov11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2011\/11";},
				style: style,
				onEachFeature: comm,
			}).addTo(no11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var dec11 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2011\/12";},
				style: style,
				onEachFeature: comm,
			}).addTo(de11).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
		//2013
			var ann13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 4) == "2013";},
				style: style,
				onEachFeature: comm,
			}).addTo(an13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var jan13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2013\/01";},
				style: style,
				onEachFeature: comm,
			}).addTo(ja13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var fev13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2013\/02";},
				style: style,
				onEachFeature: comm,
			}).addTo(fe13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});							
			var mar13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2013\/03";},
				style: style,
				onEachFeature: comm,
			}).addTo(mr13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});							
			var avr13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2013\/04";},
				style: style,
				onEachFeature: comm,
			}).addTo(av13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var mai13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2013\/05";},
				style: style,
				onEachFeature: comm,
			}).addTo(ma13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var jui13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2013\/06";},
				style: style,
				onEachFeature: comm,
			}).addTo(ju13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var jue13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2013\/07";},
				style: style,
				onEachFeature: comm,
			}).addTo(ji13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var aou13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2013\/08";},
				style: style,
				onEachFeature: comm,
			}).addTo(ao13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var sep13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2013\/09";},
				style: style,
				onEachFeature: comm,
			}).addTo(se13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var oct13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2013\/10";},
				style: style,
				onEachFeature: comm,
			}).addTo(oc13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var nov13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2013\/11";},
				style: style,
				onEachFeature: comm,
			}).addTo(no13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var dec13 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2013\/12";},
				style: style,
				onEachFeature: comm,
			}).addTo(de13).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
		//2015
			var ann15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 4) == "2015";},
				style: style,
				onEachFeature: comm,
			}).addTo(an15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var jan15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2015\/01";},
				style: style,
				onEachFeature: comm,
			}).addTo(ja15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var fev15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2015\/02";},
				style: style,
				onEachFeature: comm,
			}).addTo(fe15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var mar15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2015\/03";},
				style: style,
				onEachFeature: comm,
			}).addTo(mr15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var avr15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2015\/04";},
				style: style,
				onEachFeature: comm,
			}).addTo(av15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var mai15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2015\/05";},
				style: style,
				onEachFeature: comm,
			}).addTo(ma15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var jui15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2015\/06";},
				style: style,
				onEachFeature: comm,
			}).addTo(ju15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var jue15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2015\/07";},
				style: style,
				onEachFeature: comm,
			}).addTo(ji15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var aou15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2015\/08";},
				style: style,
				onEachFeature: comm,
			}).addTo(ao15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var sep15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2015\/09";},
				style: style,
				onEachFeature: comm,
			}).addTo(se15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var oct15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2015\/10";},
				style: style,
				onEachFeature: comm,
			}).addTo(oc15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var nov15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2015\/11";},
				style: style,
				onEachFeature: comm,
			}).addTo(no15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
			var dec15 = L.geoJson(parcours, {
				filter: function(feature, layer) {return feature.properties.date.substring(0, 7) == "2015\/12";},
				style: style,
				onEachFeature: comm,
			}).addTo(de15).bindTooltip(function (layer) {return String(layer.feature.properties.nom_manif);});
//LEGENDE
	var legend = L.control({ position: "bottomleft" });
	legend.onAdd = function(map) {
		var div = L.DomUtil.create("div", "legend");
		div.innerHTML += "<h2>Cartes de fréquentation</h2>";
		div.innerHTML += '<i style="background: #FED976"></i><span>0 à 5 000</span><br>';
		div.innerHTML += '<i style="background: #FD8D3C"></i><span>5 000 à 25 000</span><br>';
		div.innerHTML += '<i style="background: #FC4E2A"></i><span>25 000 à 50 000</span><br>';
		div.innerHTML += '<i style="background: #E31A1C"></i><span>50 000 à 100 000</span><br>';
		div.innerHTML += '<i style="background: #BD0026"></i><span>100 000 à 150 000</span><br>';
		div.innerHTML += '<i style="background: #800026"></i><span>150 000 et plus</span><br>';
		div.innerHTML += "<center><b>Méthode de pondération :</b></br>participants * durée de la manifestation</center>";
		div.innerHTML += "<center><b>Périodes :</b></br>Hiver : septembre à mars</br>Été : avril à août</center>";
		div.innerHTML += '<hr><center><table><tr><th><a href="http://www.morbihan.gouv.fr/Services-de-l-Etat/Agriculture-environnement-amenagement-et-logement/La-direction-departementale-des-Territoires-et-de-la-Mer-DDTM" target="_blank"><span title="Accéder au site de la DDTM 56"><img class="logo" src="data/DDTM.png"/></a></th><th><a href="https://www.natura2000.fr/" target="_blank"><span title="Accéder au site de Natura 2000 France"><img class="logo" src="data/N2000.png"/></a></th></tr></table></center>';
		return div;
	};
	legend.addTo(map);

//TITRE
	var titre = L.control({ position: "topcenter" });
	titre.onAdd = function(map) {
		var div = L.DomUtil.create("div", "titre");
		div.innerHTML += 'Observatoire des manifestations de loisirs terrestres non motorisées et maritimes dans le site Natura 2000 du Golfe du Morbihan';
		return div;
	};
	titre.addTo(map);

//PLEIN ECRAN
	map.isFullscreen()
	map.toggleFullscreen()
	map.on('fullscreenchange', function () {
		if (map.isFullscreen()) {console.log('entered fullscreen');} 
		else {console.log('exited fullscreen');}
	});
	map.addControl(new L.Control.Fullscreen({title: {'false': 'Vue plein écran','true': 'Sortir de la vue plein écran'}}));

//ECHELLE
	L.control.scale({position: 'bottomright'}).addTo(map);

//SOURCES
	map.attributionControl.addAttribution('<a href="http://www.morbihan.gouv.fr/Services-de-l-Etat/Agriculture-environnement-amenagement-et-logement/La-direction-departementale-des-Territoires-et-de-la-Mer-DDTM" target="_blank">DDTM Morbihan</a> | by GG');
