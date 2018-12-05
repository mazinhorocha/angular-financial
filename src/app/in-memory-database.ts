import { InMemoryDbService } from 'angular-in-memory-web-api';

export class InMemoryDatabase implements InMemoryDbService{
    createDb(){
        const categories = [
            { id: 1, name: "Lazer", description: "Lazer e Diversão"},
            { id: 2, name: "Hobby", description: "Gostos e Preferências"},
            { id: 3, name: "Esporte", description: "Esportes, torneios e campeonatos"},
            { id: 4, name: "Carros", description: "Carros e Autoesporte"},
            { id: 5, name: "Saude", description: "Saude e Bem Estar"},
            { id: 6, name: "Beleza", description: "Beleza e Modas"},
        ];

        return { categories }
    }
}