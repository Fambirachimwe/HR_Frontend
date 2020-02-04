const Arr = [
    {
        name: 'DFA',
        cp:
        {
            _id: '5e203d3e521d083eb0c7a465',
            objective: [Array],
            name: 'customer perspective'
        },
        lg:
        {
            _id: '5e203d3e521d083eb0c7a469',
            objective: [Array],
            name: 'learning and growth'
        },
        fp:
        {
            _id: '5e203d3e521d083eb0c7a461',
            objective: [Array],
            name: 'finacial perspective'
        }
    },
    {
        name: 'faramatsi',
        cp:
        {
            _id: '5e203d3e521d083eb0c7a465',
            objective: [Array],
            name: 'customer perspective'
        },
        lg:
        {
            _id: '5e203d3e521d083eb0c7a469',
            objective: [Array],
            name: 'learning and growth'
        },
        fp:
        {
            _id: '5e203d3e521d083eb0c7a461',
            objective: [Array],
            name: 'finacial perspective'
        }
    },

    {
        name: 'Silkwood',
        cp:
        {
            _id: '5e203d3e521d083eb0c7a465',
            objective: [Array],
            name: 'customer perspective'
        },
        lg:
        {
            _id: '5e203d3e521d083eb0c7a469',
            objective: [Array],
            name: 'learning and growth'
        },
        fp:
        {
            _id: '5e203d3e521d083eb0c7a461',
            objective: [Array],
            name: 'finacial perspective'
        }
    }

]

function Data (input) {
    const labels = input.map(arr => {  // array with the objects containing names 
        return (({ name}) => ({ name }))(arr)
    });

    const data = [];

    const Obj = {
        labels: [...labels.map(obj => {return obj.name})],
        label: '',
        backgroundColor: '#2146eb',
        borderColor: '#2146eb',
        data: [22, 33, 56]
    }

    Arr.map(arr => {
        Obj.label = arr.name;
        
        // return data.push(Obj)
        console.log(Obj.label)
        
    });

    return data

}

console.log(Data(Arr))