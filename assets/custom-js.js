//Accordian
const accordionItems = document.querySelectorAll('.accordion-item a');

function toggleAccordion () {
  this.classList.toggle('active');
  this.nextElementSibling.classList.toggle('active');
}

accordionItems.forEach(item => item.addEventListener('click', toggleAccordion))
//End Accordian

//Sidebar menu toggle
$(document).ready(function(){
  $(document).on('click', '.evergreen-child-menu', function(){
    $(this).parent('li').toggleClass('current');
  });
});
//End Sidebar menu toggle


//VUE CODE

//Alert Message 
new Vue({
  el: '#alertMessage'
});

Vue.component('message', {
  props: ['title', 'body'],
  template: '<div class="card"><div class="card-body"><h5 class="card-title">{{ title }}</h5><p class="card-text">{{ body }}</p></div></div>'
});
//End Alert Message 


//Task list
new Vue({
  el: '#task-list',
})

Vue.component('task-list', {
  template:'<div><task v-for="task in tasks">${ task.options }</task></div>',
  
  data() {
    return {
      tasks: [
        { options: 'Go to the store', complete: true },
        { options: 'Go to the email', complete: false },
        { options: 'Go to the farm', complete: true },
        { options: 'Go to work', complete: false }    
      ]
    }
  },
  delimiters: ['${', '}'],
});
//End Task list


  const vueapp = new Vue({
    el: '#test',
    
    data: {
      message: 'Hello',
      	tasks: [
      		{ description: 'Free Shipping', completed: true },
      		{ description: 'Free Returns', completed: false },
            { description: '30 day warranty', completed: true },
          	{ description: 'Pickup in store', completed: false }
    	]
    },
    delimiters: ['${', '}'],

    computed: { 
      reversedMessage() {
           return this.message;
        // return this.message.split('').reverse('').join('');
      },
      
      incompleteTasks() {
      	return this.tasks.filter(task => ! task.completed); 
      }
    }  
  })
  
  Vue.component('task', {
  template: '<li><slot></slot></li>',
});

//Test 1 Vue
new Vue({
  el: '#app',
  data: {
    title: 'Hello',
    title2: 'Evergreen',
    link: 'https://google.com',
    finishedLink: '<a href="http://google.com">Google</a>'
  },
  delimiters: ['${', '}'],
  methods: { 
    changeTitle: function(event) { 
    	this.title = event.target.value;
    },
    sayHello: function() {
      	this.title = 'Ciao!'
      	return this.title; 
    }
  
  }
});
//End Test 1 Vue

//Test 2 Vue
new Vue({
  el: '#app2',
  data: {
    counter: 29.95,
    afterpayMessage: 'dfgdgfd',
    x: 0,
    y: 0
  },
  delimiters: ['${', '}'],
  
  methods: { 
    increase: function(step, event) {
      this.counter += step;
    },
    updateCoordinates: function(event) {
    	this.x = event.clientX;
      	this.y = event.clientY;
    },
    alertMe: function() {
  		alert('Alert!');
  	}
  },
});
//End Test 2 Vue

//Start Test 3 Vue
new Vue({ 
  el: '#app3',
  data: {
    name: 'Max'
  },
  delimiters: ['${', '}'],
  
});
//End Test 3 Vue


//Start Test 4 Vue
new Vue({ 
  el: '#app4',
  data: {
    counter: 0,
    secondCounter: 0, 
    productPrice: ''
  },
  computed: { 
    output: function() {
      console.log('Computed');
      return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
    }
  },
  //This resets the counter after 2 secs using a CB function. 
  //Watch is looking for changes to counter
  watch: {
    counter: function(value) {
      var vm = this;
      setTimeout(function() {
      	vm.counter = 0;
      }, 20000);
    }
  },
  delimiters: ['${', '}'],
    methods: { 
      result: function () {
        console.log('Method');
        return this.counter > 5 ? 'Greater 5' : 'Smaller 5'
      }
  	}
});

//End Test 4 Vue

//Start Test 5 vue
new Vue({
  el: '#app5',
  data: {
    link: 'https://google.com'
  },
  delimiters: ['${', '}'],
  
  methods: {
    changeLink: function () {
      console.log('Apple');
      this.link = 'http://apple.com'
    }
  }
});

//End Test 5 vue

//Start Test 6 vue
new Vue({
  el: '#app6',
  data: {
    attachRed: false,
    color: 'green'
  },
  computed: {
    divClasses: function() {
      return { 
        red: this.attachRed,
        blue: !this.attachRed
      }
    }
  }
});
//End Test 6 vue

//Start test 7 vue

new Vue({
  el: '#app7',
  data: {
    show: true
  }
});

//End test 7 vue

// start Test vue 8

new Vue({
  el: '#app8',
  data: {
    ingredients: ['meat', 'fruit', 'veg'],
    persons: [
      {name: 'Ben', age: 33, color: 'red'},
  	  {name: 'Fai', age: 33, color: 'blue'}
    ]
  },
  delimiters: ['${', '}'],
});



// end Test vue 8

// start Test vue 9 - storing a vue instance to a variable and changing the 
// property of one data property to another
const vm1 = new Vue({
  data: {
    title: 'The first Instance',
    showParagraph: false
  },
  
  delimiters: ['${', '}'],

  methods: {
    show: function() {
      this.showParagraph = true;
      this.updateTitle('The VueJS Instance (Updated)');
      this.$refs.myButton.innerText = 'Test';
      console.log(this.$refs.myButton);
    },
    updateTitle: function(title) {
      this.title = title;
    }
  },
  computed: {
    lowercaseTitle: function() {
      return this.title.toLowerCase();
    }
  },
  watch: {
    title: function(value) {
      alert('Title changed, new value: ' + value);
    }
  }
});

vm1.$mount('#app9');

// vm1.$refs.heading.innerText = 'Something else';

// setTimeout(function() {
// 	vm1.title = 'Changed by timer';
//   	vm1.show();
// }, 3000);
  
// end Test vue 9

// start test app 10

const vm2 = new Vue({
  el: '#app10',
  data: {
    title: 'The second Instance',
  },
  
  delimiters: ['${', '}'],
    
  methods: {
    onChange: function() {
    	vm1.title = 'Changed!';
    }
  }
});

// end test app 10

//start test app 11

Vue.component('hello', {
  template: '<h1>Hello!</h1>'
});

const vm3 = new Vue({
  el: '#app11',
  template: '<h1>Hello</h1>'

});

// vm3.$mount('#app11');
//or
// document.getElementById('app11').append(vm3.$el);

//end test app 11


//start test app 12

new Vue({
  el: '#app12',
  data: {
    title: 'The VueJS Instance', 
  },
  	beforeCreate: function() {
  		console.log('beforeCreate()');
  },
    created: function() {
  		console.log('created()');
  },
    beforeMount: function() {
  		console.log('beforeMount()');
  },
    mounted: function() {
  		console.log('mounted()');
  },
    beforeUpdate: function() {
  		console.log('beforeUpdate()');
  },
    updated: function() {
  		console.log('updated()');
  },
   beforeDestroy: function() {
  		console.log('beforeDestroy()');
  },
   destroy: function() {
  		console.log('destroy()');
  },
  methods: {
    destroy: function() {
    	this.$destroy();    
    }
  }
})
//end test app 12

//start test app 13

const cmp = {
  	data: function() {
      return {
        status: 'critical'
      }
    },
    delimiters: ['${', '}'],
  
  	template: '<p>Server status: ${status} (<button @click="changeStatus">Change</button>)</p>',
    
  	methods: {
      changeStatus: function () {
        this.status = 'Normal';
      }
    }
};

new Vue({
  el: '#app13',
})



new Vue({
  el: '#app14',
  components: { 
    'ben-comp': cmp
  } 
})
//end test app 13