import {z} from 'zod';

import {TalkBrandedSchema} from '../../../remotion/compositions/templates/talk/talks.types';
import {DefaultProps} from '../../../remotion/types/defaultProps.types';
import {TemplateTypes} from '../../app/types/template.types';

import {AlpesCraftConfig} from './showcases/alpesCraftConfig';
import {CampingDesSpeakersConfig} from './showcases/campingDesSpeakersConfig';
import {DevfestLilleConfig} from './showcases/devfestLilleConfig';
import {DevfestNantesConfig} from './showcases/devfestNantesConfig';
import {Devoxx2024Config, DevoxxConfig} from './showcases/devoxxConfig';
import {MixitConfig} from './showcases/mixitConfig';
import {SnowcampConfig} from './showcases/snowcampConfig';
import {TouraineTechConfig} from './showcases/touraineTechConfig';
import {VeryTechTripConfig} from './showcases/veryTechTripConfig';
import {VolcampConfig} from './showcases/volcampConfig';
import {EventConfig} from './templates/eventConfig';
import {LayersConfig} from './templates/layersConfig';
import {MeetupConfig} from './templates/meetupConfig';
import {SilhouetteConfig} from './templates/silhouetteConfig';
import {
	SponsorConfig,
	SpotlightNewSponsorConfig,
} from './templates/sponsorConfig';
import {TalkBrandedConfig} from './templates/talkBrandedConfig';
import {TalkConfig} from './templates/talkConfig';

export type CompositionProps = {
	component: TemplateTypes;
	width: number;
	height: number;
	compositionName: string;
	durationInFrames: number;
	frameForThumbnail?: number;
	fps?: number;
	defaultProps?:
		| {[key: string]: string | undefined}
		| DefaultProps
		| z.infer<typeof TalkBrandedSchema>;
};

type CompositionsConfigProps = {
	templates: Record<string, CompositionProps>;
	showcases: Record<string, CompositionProps>;
};

export const CompositionsConfig: CompositionsConfigProps = {
	templates: {
		Talk: TalkConfig,
		TalkBranded: TalkBrandedConfig,
		Layers: LayersConfig,
		Sponsor: SponsorConfig,
		SpotlightNewSponsor: SpotlightNewSponsorConfig,
		Event: EventConfig,
		Meetup: MeetupConfig,
		Silhouette: SilhouetteConfig,
	},
	showcases: {
		Devoxx: DevoxxConfig,
		Devoxx2024: Devoxx2024Config,
		Mixit: MixitConfig,
		Snowcamp: SnowcampConfig,
		TouraineTech: TouraineTechConfig,
		VeryTechTrip: VeryTechTripConfig,
		AlpesCraft: AlpesCraftConfig,
		CampingDesSpeakers: CampingDesSpeakersConfig,
		Volcamp2023: VolcampConfig,
		DevfestNantes: DevfestNantesConfig,
		DevfestLille: DevfestLilleConfig,
	},
};
