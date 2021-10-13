import {
	Text,
	Button,
	GhostButton,
	Input,
	Radio,
	Counter,
} from './components/atoms';

const App = () => {
	return (
		<div>
			<Button>see product</Button>
			<Button kind="secondary">see product</Button>
			<Button kind="primary">Testing this</Button>
			<Button kind="secondary" fullWidth>
				see product
			</Button>
			<Counter />
			<Radio active={true} label="This is a radio" />
			<Input
				title="Name"
				placeholder="This is a placeholder in props"
				type="text"
			/>
			<Input title="Email" placeholder="Insert your email" type="email" />
			<Input
				title="Password"
				placeholder="Insert your password"
				type="password"
			/>
			<GhostButton>Testing button</GhostButton>
			<Text size="h1" color="accent">
				Morbis Interdum
			</Text>
			<Text size="h1">Mollis Sapien</Text>
			<Text size="h2">Morbis Interdum</Text>
			<Text size="h2">Mollis Sapien</Text>
			<Text size="h3">Morbis Interdum</Text>
			<Text size="h3">Mollis Sapien</Text>
			<Text size="h4">Morbis Interdum</Text>
			<Text size="h4">Mollis Sapien</Text>
			<Text size="h5">Morbis Interdum</Text>
			<Text size="h5">Mollis Sapien</Text>
			<Text size="h6">Morbis Interdum</Text>
			<Text size="h6">Mollis Sapien</Text>
			<Text size="overline">Morbis Interdum</Text>
			<Text size="overline">Mollis Sapien</Text>
			<Text size="subtitle">Morbis Interdum</Text>
			<Text size="subtitle">Mollis Sapien</Text>
			<Text>
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Neque omnis
				quas magnam, voluptatum exercitationem velit ipsa autem at ullam
				deserunt nulla sed amet tempora similique, a fugit. Eum assumenda non
				dolore magnam repudiandae nobis maiores, amet velit, numquam vel quis
				architecto ut unde, adipisci dolorem. Sit assumenda libero quis commodi.
				Interdum
			</Text>
			<Text size="p">
				Lorem ipsum dolor sit amet consectetur adipisicing elit. Repellendus
				placeat officiis mollitia alias delectus quod voluptates. Ducimus minus
				sequi laboriosam.
			</Text>
			<p>Testing app</p>
		</div>
	);
};

export default App;
