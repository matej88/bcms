<template>
	<div class="input-controll">
		<label><slot /></label>
		<input
			v-if="controlType === 'input'"
			v-bind="$attrs"
			:value="value"
			@input="$emit ('input', $event.target.value)">

			<textarea
				v-if="controlType === 'textarea'"
				rows = "10"
				:value = 'value'
				@input="$emit('input', $event.target.value)"
			></textarea>
	</div>
</template>


<script>
	export default {
		name: 'AppControlInput',
		props: {
			controlType: {
				type: String,
				default: 'input'
			},
			value: {
				type: String,
				default: ''
			}
		}
	}
</script>