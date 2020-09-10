import React from 'react';
import { Timeline, Tag, Divider, Spin, Image } from 'antd';
import moment from 'moment';
import { CheckOutlined, LoadingOutlined } from '@ant-design/icons';


const Experiences = () => {
  const antIcon = <LoadingOutlined style={{ fontSize: 24 }} spin />;
  
  return (
    <div className="card shadow">
      <div className="card-header bg-primary text-center">
        <h4 className="text-light">Experiences</h4>
      </div>
      <div class="card-body">
        <Divider>Réalisations</Divider>
        <Timeline reverse="true" mode="alternate">
          <Timeline.Item label="2017">
            <strong>Robot suiveur de ligne</strong>
            <br/> 
              Concours Gamel Trophy de l'IUT de Cachan
            <br/> 
            <div>
              <Tag color="geekblue">C++</Tag>
              <Tag>Altium</Tag>
            </div>
            <ul>
              <li>Conception de circuit imprimé</li>
              <li>Programmation du robot suiveur de ligne</li>
            </ul>
          </Timeline.Item> 
          <Timeline.Item label="2018">
            <strong>Jeux du SNAKE</strong>
            <br/> 
            <div>
              <Tag color="gold">Python</Tag>
              <Tag color="volcano">POO</Tag>
              <Tag color="green">Pygame</Tag>
            </div>
            <ul>
              <li>Réalisation de l'interface graphique avec Pygame</li>
              <li>Programmation du jeux en python</li>
            </ul>
          </Timeline.Item>
          <Timeline.Item label="2019">
            <strong>Google Home Page</strong><br />
            Découverte du Web
            <br/> 
            <div>
              <Tag color="orange">HTML</Tag>
              <Tag color="blue">CSS</Tag>
              <Tag color="purple">Bootstrap</Tag>
              <Tag color="gold">jQuery</Tag>
            </div>
            <ul>
              <li>Réplique de la page d'accueil Google</li>
            </ul>
          </Timeline.Item>
          <Timeline.Item label="2019">
            <strong>Jeux du MORPION</strong>
            <br/> 
            <div>
              <Tag color="red">Ruby</Tag>
              <Tag color="volcano">POO</Tag>
              <Tag color="blue">Design Pattern</Tag>
            </div>
          </Timeline.Item>
          
          <Timeline.Item label="2019">
            <strong>Web scraper</strong>
            <br/> 
            <div>
              <Tag color="red">Ruby</Tag>
              <Tag color="geekblue">Watir</Tag>
              <Tag color="green">Data</Tag>
            </div>
            <ul>
              <li>Automatisation de tâche</li>
              <li>Récuparation d'information sur les annuaires</li>
            </ul>
          </Timeline.Item>
          <Timeline.Item label="2020">
            <a href="https://alexombre.github.io/euro_mignon/" target="blank"><strong>Euro Mignon</strong></a> - Fake loterie en ligne
            <br/> 
            <div>
              <Tag color="gold">JavaScript</Tag>
              <Tag color="purple">Bootstrap</Tag>
              <Tag color="red">Regex validation</Tag>
              <Tag>Github pages</Tag>
            </div>
          </Timeline.Item>
          <Timeline.Item label="2020">
            <a href="https://petit-bac.herokuapp.com/" target="blank"><strong>Petit Bac</strong></a> 
            <br/> 
            <div>
              <Tag color="geekblue">ReactJS</Tag>
              <Tag color="red">Ruby On Rails</Tag>
              <Tag color="purple">Heroku</Tag>
              <Tag color="volcano">Redis</Tag>
              <Tag color="green">SCRUM</Tag>
              <Tag color="purple">Bootstrap</Tag>
            </div>
            <ul>
              <li>Méthode agile (Trello, Github)</li>
              <li>Création de session de jeu en temps réel</li>
              <li>Création d'une API REST</li>
              <li>CRUD Utilisateur</li>
              <li>Gestion de l'authentification</li>
            </ul>
          </Timeline.Item>
          <Timeline.Item dot={<Spin size="small" indicator={antIcon} />} label="En cours">
            <a href="https://alexombre.github.io/taxiJet77Front/" target="blank"><strong>Taxi Jet 77</strong></a> 
            <br/> 
              Freelance
            <br/> 
            <div>
              <Tag color="geekblue">ReactJS</Tag>
              <Tag color="red">Ruby On Rails</Tag>
              <Tag color="purple">Heroku</Tag>
              <Tag color="blue">Google API</Tag>
              <Tag color="green">SCRUM</Tag>
              <Tag color="purple">Bootstrap</Tag>
              <Tag color="blue">Ant Design</Tag>
              <Tag>Git</Tag>
            </div>
            <ul>
              <li>Responsive design</li>
              <li>Interface administrateur</li>
              <li>Création d'une API REST</li>
              <li>CRUD Utilisateur</li>
              <li>Gestion de l'authentification</li>
              <li>Envoi de mail automatique</li>
            </ul>
          </Timeline.Item>
        </Timeline>
        
        <Divider>Expériences professionnelles</Divider>
        
        <Timeline pending="Developpeur Web Full Stack" reverse="true" mode="alternate">
          <Timeline.Item label="Décembre 2016 - Février 2019">
            <strong>Intérimaire</strong>  pour le compte d'Adecco - Noisy-le-Grand
            <br/> 
            Client: <strong>Disneyland Paris</strong> <br/>
            <ul>
              <li>Hôte d'accueil</li>
              <li>Agent de propreté</li>
              <li>Serveur</li>
              <li>Equipier polyvalent</li>
            </ul>
          </Timeline.Item> 
          <Timeline.Item label="Mars 2019">
            <strong>Animateur de vente</strong>  pour le compte de CPM France - Issy-les-Moulineaux
            <br/> 
            Client: <strong>Samsung</strong> <br/>
            <ul>
              <li>Démonstration du Samsung S20</li>
            </ul>
          </Timeline.Item>
          <Timeline.Item label="Juin 2019 - Décembre 2019">
            <strong>Hôte d'accueil</strong>  pour le compte de City One - Paris
            <br/> 
            Client: <strong>Ministère de l'Economie et des Finances de la République française</strong> <br/>
            <ul>
              <li>Accueil téléphonique et physique</li>
              <li>Utilisation du pack Microsoft Office</li>
            </ul>
          </Timeline.Item>
          <Timeline.Item label="Depuis Janvier 2020">
            <strong>Hôte d'accueil</strong>  pour le compte d'Adecco Outsourcing - Paris
            <br/> 
            Client: <strong>Ministère de l'Economie et des Finances de la République française</strong> <br/>
            <ul>
              <li>Accueil téléphonique et physique</li>
              <li>Utilisation du pack Microsoft Office</li>
            </ul>
          </Timeline.Item>
        </Timeline>
      </div>
    </div>
  )
}

export default Experiences