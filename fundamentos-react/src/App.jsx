import React from "react";
import "./App.css";

import IndiretaPai from "./components/comunicacao/IndiretaPai";
import ListaDeAlunos from "./components/repeticao/ListaAlunos";
import FamilyMember from "./components/basic/FamilyMember";
import Family from "./components/basic/Family";
import Card from "./components/layout/Card";
import Random from "./components/basic/Random";
import First from './components/basic/First'
import ComParametro from './components/basic/ComParametro'
import Fragmento from './components/basic/Fragments'
import ListaDeProdutos from "./components/repeticao/TabelaProdutos";
import ParOuImpar from "./components/condicional/ParOuImpar";
import UsuarioInfo from "./components/repeticao/UsuarioInfo";
import DiretaPai from "./components/comunicacao/DiretaPai";
import Input from "./components/formulario/Input";
import Contador from "./components/contador/Contador";
import Mega from "./components/mega/Mega";



export default () => (
    <div className="App">

        <h1>Fundamentos React</h1>

        <div className="Cards">

            <Card title="#13 - Mega" color='#ffcc5c'>
                <Mega />
            </Card>

            <Card title="#12 - Contador" color='#283655'>
                <Contador numberInitial={1} step={5}/>
            </Card>

            <Card title="#11 - Componente Controlado (Input)" color='#f37736'>
                <Input />
            </Card>


            <Card title="#10 - Comunicação IndiretaDireta" color='#7bc043'>
                <IndiretaPai />
            </Card>


            <Card title="#09 - Comunicação Direta" color='#f9caa7'>
                <DiretaPai />
            </Card>

            <Card title="#08 - Renderização Condicional" color='#4a4e4d'>
                <ParOuImpar number={11} />
                <UsuarioInfo usuario={{ name: "Tiago" }} />
                { /*<UsuarioInfo /> condicional */}
            </Card>

            <Card title="#07 - Desafio Lista de Repetição " color='#fed766'>
                <ListaDeProdutos />
            </Card>

            <Card title="#06 - Lista de Repetição" color='#851e3e'>
                <ListaDeAlunos />
            </Card>

            <Card title="#05 - Componentes com Filhos" color='#fe4a49'>
                <Family lastName="Rocha" >
                    <FamilyMember name="Pedro" />
                    <FamilyMember name="Ana" />
                    <FamilyMember name="Julia" />
                </Family>
            </Card>

            <Card title="#04 - Valor Aleatório" color='#d4d7d9'>
                <Random min={1} max={60} />
            </Card>

            <Card title="#03 - Fragmento" color='#3690ea'>
                <Fragmento />
            </Card>

            <Card title="#02 - Função com parâmetro" color='#2450a4'>
                <ComParametro
                    titulo='Situação do aluno:'
                    aluno='Tiago'
                    nota={6.7} />

                <ComParametro
                    titulo='Situação do aluno:'
                    aluno='Nataly'
                    nota={10.0} />

            </Card>

            <Card title="#01 - Primeiro Componente" color='#51e9f4'>
                <First></First>
            </Card>
        </div>
    </div>
)