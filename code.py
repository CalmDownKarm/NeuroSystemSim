ACTION_POTENTIAL = 5

class neuron:
    #Neuron class should have a state and a function to update the state of each neuron
    state=0
    inputs = []
    output =0
    def update_state(inputs,state):
        sum=0
        for x in inputs:
            sum+=x
        if(sum<ACTION_POTENTIAL):
            state=0
        else:
            state=1

    def gather_inputs(inputs):
        #this function needs to take inputs from the surrounding neurons.
