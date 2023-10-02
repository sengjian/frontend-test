<template>
	<div>
		<div class="breadcrumbs">
			<router-link to="/">All Categories</router-link>
			<i class="fa fa-angle-right" aria-hidden="true"></i>
			<span>Getting started</span>
		</div>
		<div style="display: flex;">
			<div class="category">
				<i :class="'fa fa-' + category.icon" aria-hidden="true"></i>
				<div class="title">{{ category.title }}</div>
				<div class="updated-on">Update on {{ returnDate(category.updatedOn) }}</div>

				<hr />
				<i class="fa fa-info-circle" aria-hidden="true"></i>
				<div class="desc">{{ category.description }}</div>
			</div>
			<div class="articles">
				<div v-for="article in info" v-if="article.status === 'published'" class="article">
					<i :class="'fa fa-' + article.icon" aria-hidden="true"></i>
					<div>
						<div class="title">{{ article.title }}</div>
						<div class="updated-on">Updated on {{ returnDate(article.updatedOn) }}</div>
					</div>
					<i class="fa fa-chevron-right" aria-hidden="true"></i>
				</div>
			</div>
		</div>
	</div>
</template>
<script>
import axios from "axios";

export default {
	data() {
		return {
			info: null,
			category: {},
			items: [
				{
					title: 'Dashboard',
					disabled: false,
					href: 'breadcrumbs_dashboard',
				},
				{
					title: 'Link 1',
					disabled: false,
					href: 'breadcrumbs_link_1',
				},
				{
					title: 'Link 2',
					disabled: true,
					href: 'breadcrumbs_link_2',
				},
			]
		}
	},
	mounted() {
		axios
			.get('http://localhost:9000/api/categories')
			.then(response => (this.category = response.data.find(val => val.id == this.$route.params.id)));
		axios
			.get('http://localhost:9000/api/category/' + this.$route.params.id)
			.then(response => (this.info = response.data));
	},
	methods: {
		returnDate(date) {
			const d = new Date(date);
			return d.toDateString();
		}
	}
}
</script>

<style lang="scss" scoped>
@import '../scss/_variables.scss';

.breadcrumbs {
	color: #9C9AA6;
	font-family: Lato;
	font-size: 13px;
	font-style: normal;
	font-weight: 400;
	line-height: 22px;
	position: absolute;
    left: 120px;
    top: 20px;
	
	.fa-angle-right {
		padding: 0 14px;
	}

	a {
		color: #03A84E;
		font-family: Lato;
		font-size: 13px;
		font-style: normal;
		font-weight: 400;
		line-height: 22px;
		text-decoration: none;
	}
}

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

.category {
	width: 315px;
	height: 345.82px;
	margin: 0 60px 0 120px;
	flex-shrink: 0;
	text-align: center;
	background-color: #FFFFFF;
	border: 1px solid #EEEEEE;
	margin-bottom: 20px;
	padding-top: 40px;

	hr {
		margin: 20px 0;
	}

	.fa {
		font-size: 50px;
		color: #03A84E;
	}

	.title {
		color: #373737;
		text-align: center;
		font-family: Lato;
		font-size: 20px;
		font-style: normal;
		font-weight: 700;
		line-height: normal;
		padding: 20px;
	}

	.total-articles {
		color: #03A84E;
		text-align: center;
		font-family: Lato;
		font-size: 13px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.updated-on {
		color: #9C9AA6;
		font-family: Lato;
		font-size: 11px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.fa.fa-info-circle {
		font-size: 20px;
	}

	.desc {
		color: #9C9AA6;
		text-align: center;
		font-family: Lato;
		font-size: 13px;
		font-style: normal;
		font-weight: 400;
		line-height: 18px;
		padding: 15px 20px;
	}
}

.article {
	width: 560px;
	height: 91.538px;
	flex-shrink: 0;
	background-color: #FFFFFF;
	border: 1px solid #EEEEEE;
	display: flex;
	align-items: center;
	padding: 0 40px;
	position: relative;
	margin-bottom: 15px;

	.fa {
		color: #03A84E;
		padding-right: 25px;
	}

	.fa-chevron-right {
		position: absolute;
		right: 15px;
	}

	.title {
		color: #373737;
		font-family: Lato;
		font-size: 20px;
		font-style: normal;
		font-weight: 400;
		line-height: normal;
	}

	.updated-on {
		color: #9C9AA6;
		font-family: Lato;
		font-size: 11px;
		font-style: normal;
		font-weight: 400;
		line-height: 22px;
	}
}
</style>