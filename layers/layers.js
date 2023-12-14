ol.proj.proj4.register(proj4);
ol.proj.get("EPSG:5234").setExtent([96774.615830, 193196.513846, 97765.292345, 193663.224849]);
var wms_layers = [];


        var lyr_GoogleSatellite_0 = new ol.layer.Tile({
            'title': 'Google Satellite',
            'type': 'base',
            'opacity': 1.000000,
            
            
            source: new ol.source.XYZ({
    attributions: ' ',
                url: 'https://mt1.google.com/vt/lyrs=s&x={x}&y={y}&z={z}'
            })
        });
var format_5_Points_1 = new ol.format.GeoJSON();
var features_5_Points_1 = format_5_Points_1.readFeatures(json_5_Points_1, 
            {dataProjection: 'EPSG:4326', featureProjection: 'EPSG:5234'});
var jsonSource_5_Points_1 = new ol.source.Vector({
    attributions: ' ',
});
jsonSource_5_Points_1.addFeatures(features_5_Points_1);
var lyr_5_Points_1 = new ol.layer.Vector({
                declutter: true,
                source:jsonSource_5_Points_1, 
                style: style_5_Points_1,
                interactive: true,
                title: '<img src="styles/legend/5_Points_1.png" /> 5_Points'
            });

lyr_GoogleSatellite_0.setVisible(true);lyr_5_Points_1.setVisible(true);
var layersList = [lyr_GoogleSatellite_0,lyr_5_Points_1];
lyr_5_Points_1.set('fieldAliases', {'No': 'No', 'ID': 'ID', 'Code': 'Code', 'Y1': 'Y1', 'X1': 'X1', 'Meter_Numb': 'Meter_Numb', 'Account_Nu': 'Account_Nu', 'Company_Na': 'Company_Na', 'Account_Ad': 'Account_Ad', 'Ownership': 'Ownership', 'Receivers': 'Receivers', 'Purpose': 'Purpose', 'Buildings': 'Buildings', 'April_Mete': 'April_Mete', 'May_Meter': 'May_Meter', 'June_Meter': 'June_Meter', 'July_Meter': 'July_Meter', 'August_Met': 'August_Met', 'Last_Repai': 'Last_Repai', 'Others': 'Others', 'Images': 'Images', });
lyr_5_Points_1.set('fieldImages', {'No': '', 'ID': '', 'Code': '', 'Y1': '', 'X1': '', 'Meter_Numb': '', 'Account_Nu': '', 'Company_Na': '', 'Account_Ad': '', 'Ownership': '', 'Receivers': '', 'Purpose': '', 'Buildings': '', 'April_Mete': '', 'May_Meter': '', 'June_Meter': '', 'July_Meter': '', 'August_Met': '', 'Last_Repai': '', 'Others': '', 'Images': '', });
lyr_5_Points_1.set('fieldLabels', {'No': 'no label', 'ID': 'no label', 'Code': 'no label', 'Y1': 'no label', 'X1': 'no label', 'Meter_Numb': 'no label', 'Account_Nu': 'no label', 'Company_Na': 'no label', 'Account_Ad': 'no label', 'Ownership': 'no label', 'Receivers': 'no label', 'Purpose': 'no label', 'Buildings': 'no label', 'April_Mete': 'no label', 'May_Meter': 'no label', 'June_Meter': 'no label', 'July_Meter': 'no label', 'August_Met': 'no label', 'Last_Repai': 'no label', 'Others': 'no label', 'Images': 'no label', });
lyr_5_Points_1.on('precompose', function(evt) {
    evt.context.globalCompositeOperation = 'normal';
});