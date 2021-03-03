
import React from 'react' 
import { Button, Card, Col, Row } from 'antd'


  const data = [
    {
      "title": "Black",
      "description": "Black coffee is as simple as it gets with ground coffee beans steeped in hot water, served warm. And if you want to sound fancy, you can call black coffee by its proper name: cafe noir.",
      "ingredients": [
        "Coffee"
      ],
      "id": 1
    },
    {
      "title": "Latte",
      "description": "As the most popular coffee drink out there, the latte is comprised of a shot of espresso and steamed milk with just a touch of foam. It can be ordered plain or with a flavor shot of anything from vanilla to pumpkin spice.",
      "ingredients": [
        "Espresso",
        "Steamed Milk"
      ],
      "id": 2
    },
    {
      "title": "Cappuccino",
      "description": "Cappuccino is a latte made with more foam than steamed milk, often with a sprinkle of cocoa powder or cinnamon on top. Sometimes you can find variations that use cream instead of milk or ones that throw in flavor shot, as well.",
      "ingredients": [
        "Espresso",
        "Steamed Milk",
        "Foam"
      ],
      "id": 3
    },
    {
      "title": "Americano",
      "description": "With a similar flavor to black coffee, the americano consists of an espresso shot diluted in hot water.",
      "ingredients": [
        "Espresso",
        "Hot Water"
      ],
      "id": 4
    },
    {
      "title": "Espresso",
      "description": "An espresso shot can be served solo or used as the foundation of most coffee drinks, like lattes and macchiatos.",
      "ingredients": [
        "1oz Espresso"
      ],
      "id": 5
    },
    {
      "title": "Doppio",
      "description": "A double shot of espresso, the doppio is perfect for putting extra pep in your step.",
      "ingredients": [
        "2oz Espresso"
      ],
      "id": 6
    },
    {
      "title": "Cortado",
      "description": "Like yin and yang, a cortado is the perfect balance of espresso and warm steamed milk. The milk is used to cut back on the espresso's acidity.",
      "ingredients": [
        "1oz Espresso",
        "1oz Steamed Milk"
      ],
      "id": 7
    },
    {
      "title": "Red Eye",
      "description": "Named after those pesky midnight flights, a red eye can cure any tiresome morning. A full cup of hot coffee with an espresso shot mixed in, this will definitely get your heart racing.",
      "ingredients": [
        "Coffee",
        "Espresso"
      ],
      "id": 8
    },
    {
      "title": "Galão",
      "description": "Originating in Portugal, this hot coffee drink is closely related to the latte and cappuccino. Only difference is it contains about twice as much foamed milk, making it a lighter drink compared to the other two.",
      "ingredients": [
        "Espresso",
        "Foamed milk"
      ],
      "id": 9
    },
    {
      "title": "Lungo",
      "description": "A lungo is a long-pull espresso. The longer the pull, the more caffeine there is and the more ounces you can enjoy.",
      "ingredients": [
        "Long pulled espresso"
      ],
      "id": 10
    },
    {
      "title": "Macchiato",
      "description": "The macchiato is another espresso-based drink that has a small amount of foam on top. It's the happy medium between a cappuccino and a doppio.",
      "ingredients": [
        "Espresso",
        "Foam"
      ],
      "id": 11
    },
    {
      "title": "Mocha",
      "description": "For all you chocolate lovers out there, you'll fall in love with a mocha (or maybe you already have). The mocha is a chocolate espresso drink with steamed milk and foam.",
      "ingredients": [
        "Espresso",
        "Steamed Milk",
        "Chocolate"
      ],
      "id": 12
    },
    {
      "title": "Ristretto",
      "description": "Ristretto is an espresso shot. It uses less hot water which creates a sweeter flavor compared to the bitter taste of a traditional shot of espresso or a doppio.",
      "ingredients": [
        "Short pulled espresso"
      ],
      "id": 13
    },
    {
      "title": "Flat White",
      "description": "This Aussie-born drink is basically a cappuccino without the foam or chocolate sprinkle. It's an espresso drink with steamed milk.",
      "ingredients": [
        "Espresso",
        "Steamed Milk"
      ],
      "id": 14
    },
    {
      "title": "Affogato",
      "description": "The affogato is an excuse to enjoy a scoop of ice cream any time of day (and any time of year in my opinion). Served with a scoop of ice cream and a shot of espresso, or two.",
      "ingredients": [
        "Espresso",
        "Ice cream"
      ],
      "id": 15
    },
    {
      "title": "Café au Lait",
      "description": "Café au lait is perfect for the coffee minimalist who wants a bit more flavor. Just add a splash of warm milk to your coffee and you're all set!",
      "ingredients": [
        "Coffee",
        "Steamed Milk"
      ],
      "id": 16
    },
    {
      "title": "Irish",
      "description": "Irish coffee consists of black coffee, whiskey and sugar, topped with whipped cream.",
      "ingredients": [
        "Coffee",
        "Whiskey",
        "Sugar",
        "Cream"
      ],
      "id": 17
    },
    {
      "title": "Guayoyo",
      "description": "Traditional venezuelan coffee prepared by filtering the ground coffee in a cone of cloth and pouring hot water on top of it. It's prefferably drinked wihout milk nor cream.",
      "ingredients": [
        "Coffee",
        "Traditional",
        "Hot Water"
      ],
      "id": 18
    },
    {
      "title": "Cortadito",
      "description": "Traditional cuban coffee method where a bit of freshly brewed coffee is mixed with sugar to create a highly sugared paste. Then add the rest of the coffee and stir adding milk until a 50/50 ratio is achieved.",
      "ingredients": [
        "Coffee",
        "Traditional",
        "Sugar",
        "Milk"
      ],
      "id": 19
    },
    {
      "title": "Aguapanela Coffee",
      "description": "Bring panela and coffee to a boil in a small pan for 30 minutes until panela is melted. Brew your coffee using your favorite brewing technique but add the hot aguapanela instead of hot water. Delicious sweetened coffee is ready.",
      "ingredients": [
        "Coffee",
        "Sweet",
        "Panela",
        "Traditional"
      ],
      "id": 20
    }
  ]


class Message extends React.Component {
  constructor(props){
    super(props)
    this.state = {
      counter: 0
    }
  }
  handleClick(inc) {
    this.setState({ counter: this.state.counter + inc })
  }
  render() {
    return (
      <section>
        <p>Here is some interesting info.</p>
        <h2>You clicked {this.state.counter} times.</h2>
        <Button type="primary" onClick={() => this.handleClick(1)}>+1</Button>
        <Button type="primary" danger onClick={() => this.handleClick(-1)}>-1</Button>
        <hr />
        <h2>Coffees:</h2>
        <div className="site-card-wrapper">
          <Row gutter={16}>
          {data.map(drink => {
            return (
              <Col span={8} key={drink.id}>
                <Card title={drink.title} bordered={false}>
                {/*  {drink.description} change to ingredients*/}
                 {drink.ingredients.map(ingred => {
                   return <li key={ingred}>{ingred}</li>
                 })} 
                </Card>
              </Col>
            )
          })}
          </Row>
        </div>
      </section>
    )
  }
}

export default Message 







// import React from 'react'

// class Message extends React.Component {  //React.Component is the parent class here
// constructor(props){ //props is a reserved word
//     super(props)
//     this.state ={
//         counter: 0
//     }
// }

// handleClick(inc){
//   this.setState({ counter: this.state.counter + inc })

// }

//     render() { //have to use render in class components
//         return (
//             <section>
//                 <p> Here is some more interesting info</p>
//                 <h2> You clicked{this.state.counter} times</h2>
//                 <button onClick={()=> this.handleClick(1)}>+1</button>
//                 <button onClick={()=> this.handleClick(-1)}>-1</button>

//             </section>
//         )
//     }



// }

// export default Message