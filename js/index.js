$(function(){
	var side = new Vue({
		el:"#sidebar",
		data:{
			list:[],
		},
		mounted:function(){
			var self = this;
			fetch("index-1.json").then(function(response){
				return response.json();
			}).then(function(data){
				self.list  = data;
			})
		}
	});

	var con = new Vue({
		el:"#content",
		data:{
  			list:[],
  			array:[],
  			list1:[],
  			list2:[],

		},
		mounted:function(){
			var self = this;
			fetch("index-2.json").then(function(response){
				return response.json();
			}).then(function(data){
				self.list = data;
			});

			fetch("index-3.json").then(function(response){
				return response.json();
			}).then(function(data){
				self.array = data;
			});

			fetch("index-4.json").then(function(response){
				return response.json();
			}).then(function(data){
				self.list1 = data;
			});

			fetch("index-5.json").then(function(response){
				return response.json();
			}).then(function(data){
				self.list2 = data;
			});

		
		},
	})
})