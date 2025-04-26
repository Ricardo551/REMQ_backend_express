const express = require('express');
const cors = require('cors');
const app = express();
const puerto = 3000;
app.use(cors());


app.get('/usuario', function(req,res){
    res.json({
        primernombre: "Ricardo",
        segundonombre: "Ernesto",
        primerapellido: "Mejia",
        segundoapellido: "Quintanilla",
        fechadenacimiento: "2004-09-01",
        estadofamiliar: "Soltero",
        recidencia: "San Salvador",
        profesion: "Estudiante",
        estatura: "1.65",
        peso: "120.2",
        colorpiel: "Moreno",
        colorojos: "cafe",
        colorcabello: "Negro",
        ultimosempleos: [{
            empresa: "Ninguna",
            departamento: "Ninguno",
            direccion: "San Salvador",
            cargo: "Ninguno",
            desde: "Nada",
            hasta: "Hoy"

        },{
            empresa: "Mi casa",
            departamento: "La sala",
            direccion: "San Salvador",
            cargo: "Equipo de Limpieza",
            desde: "2013",
            hasta: "2025"
        },{
            empresa: "El carro de mi papá",
            departamento: "El patio",
            direccion: "San Salvador",
            cargo: "Lava carros",
            desde: "2024",
            hasta: "2025"
        },{
            empresa: "Proyecto absolutt",
            departamento: "cargador",
            direccion: "San Salvador",
            cargo: "Cargador",
            desde: "2015",
            hasta: "2021"
        

        }]
    });
});

app.get('/genero', function(req,res){
    res.json([
        {id:1, genero: 'Masculino'},
        {id:2, genero: 'Femenino'}
    ])
});

app.get('/tipo_documento',function(req,res){
    res.json([
        {id:1,tipo_documento: 'DUI'},
        {id:2,tipo_documento: 'NIT'},
        {id:3,tipo_documento: 'ISSS'},
        {id:4,tipo_documento: 'PASAPORTE'}

    ]);
});

app.get('/departamento',function(req,res){
    res.json([
        {id:1,departamento:"Ahuachapaán"},
        {id:2,departamento:"Santa Ana"},
        {id:3,departamento:"Sonsonate"},
        {id:4,departamento:"La Libertad"},
        {id:5,departamento:"San Salvador"},
        {id:6,departamento:"Chalatenango"},
        {id:7,departamento:"Cuscatlán"},
        {id:8,departamento:"Cabañas"},
        {id:9,departamento:"La Paz"},
        {id:10,departamento:"San Vicente"},
        {id:11,departamento:"San Miguel"},
        {id:12,departamento:"Morazán"},
        {id:13,departamento:"La Unión"},
        {id:14,departamento:"Usulutan"},
    ]);
});

app.get('/municipio',function(req,res){
    res.json([
        {id:1,municipio:"Ahuachapán"},
        {id:2,municipio:"Santa Ana"},
        {id:3,municipio:"Izalco"},
        {id:4,municipio:"Santa Tecla"},
        {id:5,municipio:"Soyapango"},
        {id:6,municipio:"Las Pilas"},
        {id:7,municipio:"Cojutepeque"},
        {id:8,municipio:"Ilobasco"},
        {id:9,municipio:"Olocuilta"},
        {id:10,municipio:"Apastepeque"},
        {id:11,municipio:"Jucuapa"},
        {id:12,municipio:"El Triunfo"},
        {id:13,municipio:"Sociedad"},
        {id:14,municipio:"San Alejo"},
    ]);
});

//GET http://www.algo.com/suma?campo1=3.56&campo2=9.13
app.get('/sumar',function(req,res){
    let resultado = parseFloat(req.query.campo1)+parseFloat(req.query.campo2);
    res.json({
        respuesta:resultado
    });
});

app.get('/login',function(req,res){
    console.log(req.query.email);
    console.log(req.query.password);
});

app.listen(puerto,function(){
    console.log("EL SERVIDOR ESTÁ CORRIENDO EN EL PUERTO NO.3000");
});