var synaptic = require('synaptic'); // this line is not needed in the browser
var Neuron = synaptic.Neuron,
	Layer = synaptic.Layer,
	Network = synaptic.Network,
	Trainer = synaptic.Trainer,
	Architect = synaptic.Architect;
	
function Perceptron(input, hidden, output)
{
	// create the layers
	var inputLayer = new Layer(input);
	var hiddenLayer = new Layer(hidden);
	var outputLayer = new Layer(output);

	// connect the layers
	inputLayer.project(hiddenLayer);
	hiddenLayer.project(outputLayer);

	// set the layers
	this.set({
		input: inputLayer,
		hidden: [hiddenLayer],
		output: outputLayer
	});
}

// extend the prototype chain
Perceptron.prototype = new Network();
Perceptron.prototype.constructor = Perceptron;

var myPerceptron = new Perceptron(2,7,1);
var myTrainer = new Trainer(myPerceptron);

// [ Contractiness, Nearness, Telecommutiness ]
var trainingSet = [{
      input: [0, 0, 0],
      output: [0]
    }, {
      input: [0, 0, 1],
      output: [0]
    }, {
      input: [0, 1, 0],
      output: [0]
    }, {
      input: [0, 1, 1],
      output: [0]
    }, {
      input: [1, 0, 0],
      output: [0]
    }, {
      input: [1, 0.1, 0],
      output: [0]
    }, {
      input: [1, 0.2, 0],
      output: [0]
    }, {
      input: [1, 0.3, 0],
      output: [0]
    }, {
      input: [1, 0.4, 0],
      output: [0]
    }, {
      input: [1, 0.5, 0],
      output: [0]
    }, {
      input: [1, 0.6, 0],
      output: [1]
    }, {
      input: [1, 0.7, 0],
      output: [1]
    }, {
      input: [1, 0.8, 0],
      output: [1]
    }, {
      input: [1, 0.9, 0],
      output: [1]
    }, {
      input: [1, 1, 0],
      output: [1]
    }, {
      input: [1, 0, 1],
      output: [1]
    }, {
      input: [1, 0.1, 1],
      output: [1]
    }, {
      input: [1, 0.2, 1],
      output: [1]
    }, {
      input: [1, 0.3, 1],
      output: [1]
    }, {
      input: [1, 0.4, 1],
      output: [1]
    }, {
      input: [1, 0.5, 1],
      output: [1]
    }, {
      input: [1, 0.6, 1],
      output: [1]
    }, {
      input: [1, 0.7, 1],
      output: [1]
    }, {
      input: [1, 0.8, 1],
      output: [1]
    }, {
      input: [1, 0.9, 1],
      output: [1]
    }, {
      input: [1, 1, 1],
      output: [1]
    }
];
	
myTrainer.train(trainingSet,{
	rate: .1,
	iterations: 200000,
	error: .005,
	shuffle: true,
	log: 1000,
	cost: Trainer.cost.CROSS_ENTROPY
});

console.log("Perm");
console.log(myPerceptron.activate([0,0,0])); // No
console.log(myPerceptron.activate([0,0,1])); // No
console.log(myPerceptron.activate([0,1,0])); // No
console.log(myPerceptron.activate([0,1,1])); // No

console.log("Nearness");
console.log(myPerceptron.activate([1,0,0])); // No
console.log(myPerceptron.activate([1,0.1,0])); // No
console.log(myPerceptron.activate([1,0.2,0])); // No
console.log(myPerceptron.activate([1,0.3,0])); // No
console.log(myPerceptron.activate([1,0.4,0])); // Probably not
console.log(myPerceptron.activate([1,0.5,0])); // Maybe
console.log(myPerceptron.activate([1,0.6,0])); // Yes
console.log(myPerceptron.activate([1,0.7,0])); // Yes
console.log(myPerceptron.activate([1,1,0])); // Yes

console.log("From home");
console.log(myPerceptron.activate([1,0,1])); // Yes
console.log(myPerceptron.activate([1,1,1])); // Yes
console.log(myPerceptron.activate([1,0.4,1])); // Yes
console.log(myPerceptron.activate([1,0.5,1])); // Yes
console.log(myPerceptron.activate([1,0.6,1])); // Yes
console.log(myPerceptron.activate([1,0.6,1])); // Yes
console.log(myPerceptron.activate([1,0.7,1])); // Yes
console.log(myPerceptron.activate([1,0.8,1])); // Yes
console.log(myPerceptron.activate([1,0.9,1])); // Yes

console.log(myPerceptron.activate([1,0.1,1])); // Yes

console.log("done");