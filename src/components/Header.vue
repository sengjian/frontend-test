<template>
	<div id="header-wrapper">
		<div id="header-text">
			<h1>Knowledge base doesn't have to be boring</h1>
			<h3>Everything you need to manage your messaging</h3>
			<input @keyup.enter="navigate()" placeholder="Search for answers" v-model="query">
			<button @click="navigate()"><i class="fa fa-search" aria-hidden="true"></i></button>
		</div>
	</div>
</template>

<script>
export default {
	data() {
		return {
			query: null
		}
	},
	methods: {
		navigate() {
			if (!this.query || this.query == '') return;

			this.$router.push(`/search/${this.query}`).finally(() => { this.$router.go() });
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

#header-text {
	text-align: center;
	font-family: $font-family;
	color: $text-black;
	padding: 20px;
	margin-bottom: 55px;

	h1 {
		font-style: normal;
		font-weight: bold;
		font-size: 34px;
		line-height: 41px;
	}

	h3 {
		font-style: normal;
		font-weight: normal;
		font-size: 20px;
		line-height: 24px;
	}
}

input {
	width: 720px;
	height: 20px;
	border-radius: 4px;
	border: 1px solid #EEE;
	background: #FFF;
	color: #9C9AA6;
	font-family: Lato;
	font-size: 16px;
	font-style: normal;
	font-weight: 400;
	line-height: normal;
	padding: 20px;
	margin-right: -80px;
	margin-top: 20px;

	&:focus {
		outline: none;
	}
}

button {
	width: 80px;
	height: 60px;
	background-color: #03A84E;
	color: #FFFFFF;
	border: none;
	padding: 0;
	font-size: 18px;
}
</style>