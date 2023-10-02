<template>
	<div style="background-color: #FAFAFA;">
		<div class="categories">
			<div v-for="category in info" v-if="category.enabled" class="category" @click="navigate(category.id)">
				<i :class="'fa fa-' + category.icon" aria-hidden="true"></i>
				<div class="title">{{ category.title }}</div>
				<div class="total-articles">{{ category.totalArticle }} articles</div>
				<div class="updated-on">Last update on {{ returnDate(category.updatedOn) }}</div>
			</div>
		</div>
	</div>
</template>

<script>
import axios from "axios";
export default {
	data() {
		return {
			info: null
		}
	},
	mounted() {
		axios
			.get('http://localhost:9000/api/categories')
			.then(response => (this.info = response.data))
	},
	methods: {
		navigate(id) {
			this.$router.push(`category/${id}`)
		},

		returnDate(date) {
			const d = new Date(date);
			return d.toDateString();
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

.fa {
	font-size: 50px;
	color: $green;
}

.categories {
	display: flex;
	flex-wrap: wrap;
	max-width: 985px;
	justify-content: space-between;
	margin: 0 auto;
}

.category {
	cursor: pointer;
	width: 315px;
	height: 220px;
	flex-shrink: 0;
	text-align: center;
	background-color: #FFFFFF;
	border: 1px solid #EEEEEE;
	margin-bottom: 20px;
	display: flex;
	flex-direction: column;
	justify-content: center;

	.title {
		color: $text-black;
		text-align: center;
		font-family: Lato;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		padding: 20px;
	}

	.total-articles {
		color: $green;
		text-align: center;
		font-family: Lato;
		font-size: 13px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.updated-on {
		color: $text-gray;
		font-family: Lato;
		font-size: 11px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}
}
</style>