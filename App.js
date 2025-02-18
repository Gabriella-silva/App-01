import { StatusBar } from 'expo-status-bar';
import { StyleSheet, Text, View, Image, ScrollView, Button } from 'react-native';

export default function App() {
  return (
    <View style={styles.container}>
      <StatusBar style="auto" />
      
      <Text style={styles.title}>Tipos de Programadores</Text>

      <ScrollView contentContainerStyle={styles.scrollView}>
        <View style={styles.card}>
          <Text style={styles.subtitle}>Junior</Text>
          <Image style={styles.img} source={require('./assets/junior.jpg')} />

          <Text>Um programador Junior é alguém que está no início da carreira de desenvolvimento. Ele tem conhecimento básico das linguagens de programação e ferramentas, mas ainda está desenvolvendo habilidades e experiência. Normalmente, um desenvolvedor júnior recebe orientação constante de desenvolvedores mais experientes e trabalha em tarefas mais simples ou com pouca complexidade. Ele pode não ter a experiência necessária para tomar decisões arquiteturais ou lidar com situações inesperadas em projetos complexos.

Habilidades principais: Conhecimento básico em uma ou mais linguagens de programação.
Responsabilidades: Implementação de tarefas simples, correção de bugs, desenvolvimento de funcionalidades de baixo impacto.
Orientação: Trabalha sob supervisão de desenvolvedores mais experientes.</Text>
        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Pleno</Text>
          <Image style={styles.img} source={require('./assets/pleno.jpg')} />
          <Text>
          O programador Pleno já possui uma boa base de conhecimento e experiência. Ele tem uma compreensão mais profunda das linguagens e frameworks que utiliza, e pode lidar com tarefas de complexidade média de forma mais independente. Embora ainda precise de alguma orientação, o desenvolvedor pleno é capaz de assumir a liderança de projetos menores ou de partes de projetos maiores, além de colaborar com a equipe para resolver problemas mais desafiadores.

Habilidades principais: Conhecimento intermediário em várias tecnologias, capacidade de solucionar problemas mais complexos.
Responsabilidades: Desenvolvimento de funcionalidades complexas, otimização de código, interação com o time para revisão e melhoria de processos.
Orientação: Autonomia moderada, mas com a necessidade ocasional de apoio de desenvolvedores seniores.
          </Text>

        </View>

        <View style={styles.card}>
          <Text style={styles.subtitle}>Senior</Text>
          <Image style={styles.img} source={require('./assets/senior.jpg')} />
          <Text>
          Um programador Senior é um especialista que tem ampla experiência em desenvolvimento de software e pode liderar projetos de grande porte. Ele é responsável por decisões arquiteturais, planejamento estratégico e resolução de problemas complexos. O desenvolvedor sênior também mentoriza e orienta membros mais novos da equipe, ajudando a resolver desafios técnicos e a garantir que as melhores práticas sejam seguidas durante o desenvolvimento.

Habilidades principais: Profundo conhecimento técnico, habilidades em design de sistemas, arquitetura de software e resolução de problemas complexos.
Responsabilidades: Liderança técnica, tomada de decisões estratégicas, mentoramento de equipe, revisão de código e garantia de qualidade.
Orientação: Alta autonomia e liderança, sendo referência para os demais desenvolvedores.

          </Text>
        </View>
      </ScrollView>
    </View>
  );
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    backgroundColor: '#f4f4f9', 
    alignItems: 'center',
    justifyContent: 'flex-start',
    paddingTop: 50,
  },
  title: {
    fontSize: 28,
    fontWeight: 'bold',
    color: '#333',
    marginBottom: 20,
    fontFamily: 'Arial', 
  },
  scrollView: {
    paddingBottom: 20,
  },
  card: {
    backgroundColor: '#fff',
    borderRadius: 50,
    shadowColor: '#000',
    shadowOffset: { width: 0, height: 2 },
    shadowOpacity: 0.1,
    shadowRadius: 5,
    padding: 20,
    marginBottom: 20,
    width: '90%',
    alignItems: 'center',
    justifyContent: 'center',
    shadowColor: "#000000",
shadowOffset: {
  width: 0,
  height: 18,
},
shadowOpacity:  0.25,
shadowRadius: 20.00,
elevation: 24
  },
  subtitle: {
    fontSize: 22,
    fontWeight: '600',
    color: '#555',
    marginBottom: 10,
    fontFamily: 'Arial', 
  },
  img: {
    width: 400,
    height: 200,
    borderRadius: 50,

    resizeMode: 'contain',
  },
});
