// First, we must import the schema creator
import createSchema from 'part:@sanity/base/schema-creator';

// Then import schema types from any plugins that might expose them
import schemaTypes from 'all:part:@sanity/base/schema-type';
import event from './event';
import category from './category';
import tag from './tag';
import mentor from './mentor';
import profile from './profile';
import topic from './topic';
import doc from './doc';
import post from './post';
import person from './person';
import cmyk from './cmyk';
import reactGroup from './react-group';
import cmykParticipant from './cmyk-participant';
import featuredCards from './featuredCards';
import settings from './settings';
import page from './page';
import technology from './technology';
import role from './role';
import seniority from './seniority';

// Then we give our schema to the builder and provide the result to Sanity
export default createSchema({
  // We name our schema
  name: 'default',
  // Then proceed to concatenate our document type
  // to the ones provided by any plugins that are installed
  types: schemaTypes.concat([
    /* Your types here! */
    settings,
    person,
    event,
    category,
    tag,
    mentor,
    profile,
    topic,
    role,
    seniority,
    doc,
    post,
    cmyk,
    reactGroup,
    cmykParticipant,
    featuredCards,
    page,
    technology,
  ]),
});
