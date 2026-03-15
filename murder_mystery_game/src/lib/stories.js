export const STORIES = {
  manor_murder: {
    id: 'manor_murder',
    title: 'The Murder at Blackwood Manor',

    casefile: {
      headline: 'A Patriarch Falls During a Final Toast',
      overview: `
Reginald Blackwood, iron-willed patriarch of the Blackwood estate, collapsed mid-toast during a private family dinner. The storm outside trapped everyone inside the manor — no one entered, no one left.

He had gathered the household to announce revisions to his will. Tensions were already simmering: failing investments, buried family scandals, and a legacy built more on control than affection.

Only three people stood to gain — or lose — from what he was about to reveal.

The wine was poured.
The toast was made.
And within minutes, the most powerful man in the room was dead.

Someone inside Blackwood Manor decided his story would end that night.
      `,
      objective: `
Interrogate the suspects. Observe what they avoid. Notice the emotional fractures beneath the surface.

When you are certain, make your accusation.
      `
    },

    truth: {
      murderer: 'butler',
      weapon: 'poisoned wine',
      motive: 'Revenge for a lifetime of erasure and a final will that would erase him forever.'
    },

    setting: {
      location: 'Blackwood Manor',
      atmosphere: 'An ancestral estate isolated by wind-swept moors. Portraits of stern ancestors line the halls. The storm outside feels less violent than the tension within.',
      time: 'Late autumn. The night Reginald intended to announce revisions to his will.'
    },

    backstory: {
      familyHistory: 'The Blackwood fortune was built through ruthless industrial expansion.',
      hiddenScandal: 'Years ago, a maid left the manor quietly with a child.',
      financialPressure: 'The estate is no longer as solvent as it appears.',
      recentEvent: 'Reginald summoned everyone to dinner to formalize a rewritten will.'
    },

    timeline: {
      18.30: 'Guests arrive. Storm intensifies.',
      19.10: 'Argument in the study.',
      19.40: 'Wine poured.',
      19.52: 'Reginald collapses.'
    },

    victim: {
      name: 'Reginald Blackwood',
      role: 'Patriarch',
      personality: 'Immaculately mannered, emotionally frigid, obsessed with legacy.',
      reputation: 'Publicly admired. Privately feared.'
    },

    environmentClues: {
      diningRoom: [
        'Reginald’s glass shows crystalline residue.',
        'The decanter slightly misplaced.'
      ]
    },

    characters: {
      butler: {
        id: 'butler',
        name: 'Edmund Vale',
        role: 'Butler',
        personality: 'Controlled, observant, precise.',
        alibi: 'Overseeing dinner service.',
        secrets: [
          'He is Reginald’s illegitimate son.',
          'He altered ledger entries to conceal toxin purchase.'
        ],
        lies: [
          'Claims never to have touched Reginald’s glass.'
        ],
        knows: [
          'Clara feared disinheritance.'
        ],
        subtleClues: {
          surface: [
            'Composure cracks when his mother is mentioned.'
          ]
        },
        relationships: {
          heir: 'Half-sister.',
          guest: 'Discussed finances privately.'
        }
      },

      heir: {
        id: 'heir',
        name: 'Clara Blackwood',
        role: 'Daughter',
        personality: 'Intelligent, proud, reactive.',
        alibi: 'In her room.',
        secrets: [
          'She suspected Edmund’s true parentage.'
        ],
        lies: [
          'Claims she never left her room.'
        ],
        knows: [
          'Her father accused Edmund of altering accounts.'
        ],
        subtleClues: {
          surface: [
            'Glances at Edmund when inheritance is discussed.'
          ]
        },
        relationships: {
          butler: 'Resentment mixed with guilt.',
          guest: 'Past romantic involvement.'
        }
      },

      guest: {
        id: 'guest',
        name: 'Arthur Hawthorne',
        role: 'Family Friend',
        personality: 'Smooth, socially adept.',
        alibi: 'Outside briefly.',
        secrets: [
          'Deeply indebted to Reginald.'
        ],
        lies: [
          'Denies discussing inheritance with Edmund.'
        ],
        knows: [
          'Edmund handled the decanter.'
        ],
        subtleClues: {
          surface: [
            'Avoids eye contact about finances.'
          ]
        },
        relationships: {
          butler: 'Financial discussions.',
          heir: 'Romantic tension.'
        }
      }
    }
  },

  lighthouse_mystery: {
    id: 'lighthouse_mystery',
    title: 'Death at Stormwatch Lighthouse',

    casefile: {
      headline: 'A Fall from the Lantern Room',
      overview: `
Dr. Sylvia North was found unconscious at the base of the lighthouse stairs during a violent winter storm. She had last been seen near the lantern room at the top of the tower.

The storm made escape impossible. The lighthouse stood isolated against crashing waves. Inside were only a handful of people — each carrying private tensions.

There were raised voices earlier that evening.
A crash echoed through the tower.
Then silence.

Was it an accident?
Or did someone ensure she would never leave the lighthouse alive?
      `,
      objective: `
Question carefully. Listen to what is avoided. The truth may be hidden in hesitation.

When you are certain — accuse.
      `
    },

    truth: {
      murderer: 'keeper',
      weapon: 'struck by a falling lantern',
      motive: 'Jealousy over inheritance and a secret affair.'
    },

    setting: {
      location: 'Stormwatch Lighthouse',
      atmosphere: 'Perched on jagged cliffs during a relentless storm.',
      time: 'Winter night during inspection.'
    },

    victim: {
      name: 'Dr. Sylvia North',
      role: 'Researcher',
      personality: 'Curious, meticulous, secretive.',
      reputation: 'Respected but guarded.'
    },

    characters: {
      keeper: {
        id: 'keeper',
        name: 'Gideon Hawthorn',
        role: 'Lighthouse Keeper',
        personality: 'Stern, methodical.',
        alibi: 'Maintaining lighthouse.',
        secrets: [
          'Jealous of victim’s relationship with his spouse.'
        ],
        lies: [
          'Claims he never left the lantern room.'
        ],
        knows: [
          'Arguments occurred earlier.'
        ],
        subtleClues: {
          surface: [
            'Fidgets with lantern mechanisms.'
          ]
        },
        relationships: {
          guest1: 'Professional tension.',
          guest2: 'Distrust.'
        }
      },

      guest1: {
        id: 'guest1',
        name: 'Dr. Leonard Fisk',
        role: 'Scientist',
        personality: 'Analytical, skeptical.',
        alibi: 'In guest quarters.',
        secrets: [
          'Knew about hidden romance.'
        ],
        lies: [
          'Denies leaving quarters.'
        ],
        knows: [
          'Saw victim near lantern room.'
        ],
        subtleClues: {
          surface: [
            'Sweats when questioned.'
          ]
        },
        relationships: {
          keeper: 'Wary.',
          victim: 'Professional respect.'
        }
      },

      guest2: {
        id: 'guest2',
        name: 'Marina Wells',
        role: 'Visitor',
        personality: 'Outgoing, adventurous.',
        alibi: 'In kitchen.',
        secrets: [
          'Saw argument before crash.'
        ],
        lies: [
          'Claims she stayed downstairs.'
        ],
        knows: [
          'Heard crash from top floor.'
        ],
        subtleClues: {
          surface: [
            'Laughs nervously.'
          ]
        },
        relationships: {
          keeper: 'Distrustful.',
          guest1: 'Friendly rivalry.'
        }
      }
    }
  },

  sterling_estate: {
    id: 'sterling_estate',
    title: 'The Murder at the Sterling Estate',

    casefile: {
      headline: 'The Master of the House Found Dead in His Study',
      overview: `
Reginald Sterling, the iron-fisted master of the Sterling estate, was discovered dead in his private study at 2:00 PM. 

It was supposed to be a quiet afternoon. His wife was tending to matters indoors, the staff were going about their daily routines, and his son was expected for a visit. But behind closed doors, a violent confrontation took place. 

The killer tried to cover their tracks, slipping through the shadows of the estate and putting on a performance for the rest of the household. Yet, everyone in the house has their own secrets, and the estate's staff—from the meticulous maid to the quiet gardener—each hold a piece of the puzzle.

Someone in the Sterling household thought they could get away with murder.
      `,
      objective: `
Interrogate the family and staff. Pay close attention to their timelines, their physical state, and what they claim to have seen. Pierce through their personal lies to uncover the hidden truth.

When you are certain, make your accusation.
      `
    },

    truth: {
      murderer: 'son',
      weapon: 'heavy paperweight',
      motive: 'Rage over discovering his father was changing the will to cut him off entirely.'
    },

    setting: {
      location: 'The Sterling Estate',
      atmosphere: 'A sprawling, wealthy mansion with manicured gardens, a grand driveway, and a quiet, tense interior.',
      time: 'Early afternoon, a cool day. The critical window is between 1:10 PM and 2:00 PM.'
    },

    backstory: {
      familyHistory: 'The Sterling fortune is vast, but the family dynamics are strained by greed and emotional distance.',
      hiddenScandal: 'Arthur, the sole heir, is bleeding money at high-stakes clubs and is desperate for cash.',
      financialPressure: 'Reginald was in the process of rewriting his will to protect his assets from his son.',
      recentEvent: 'Arthur showed up unannounced to "borrow" money from his father\'s safe.'
    },

    timeline: {
      13.10: 'Arthur enters via the Side Gate. Eleanor sees him from the Dining Hall.',
      13.30: 'Violent argument in the Study. Arthur murders Reginald.',
      13.35: 'Eleanor, frightened by the shouting, retreats to the kitchen with Maria.',
      13.45: 'Arthur tries to clean up. Gary the Gardener sees his shadow in the Study window.',
      13.50: 'Arthur slips out the Side Gate, leaving it ajar.',
      13.55: 'Arthur "arrives" at the front door. Tommy notices his muddy shoes. Gary locks the Side Gate.',
      14.00: 'Maria brings tea to the Study, finds the body, and screams.'
    },

    victim: {
      name: 'Reginald Sterling',
      role: 'Master of the Estate',
      personality: 'Strict, wealthy, commanding.',
      reputation: 'A successful businessman who ruled his household with an iron fist.'
    },

    environmentClues: {
      study: [
        'A heavy paperweight is missing from the desk.',
        'Signs of frantic, rushed cleaning on the desk and floor.'
      ],
      exterior: [
        'The Side Gate was found unlocked and slightly ajar at 1:55 PM.',
        'Dark garden mulch is present on the front foyer floor.'
      ]
    },

    characters: {
      wife: {
        id: 'wife',
        name: 'Eleanor Sterling',
        role: 'The Wife',
        personality: 'Sophisticated, Stoic, Observant.',
        alibi: 'In the kitchen with the maid getting calming tea.',
        secrets: [
          'She has been secretly siphoning money from Reginald\'s accounts.',
          'She heard the violent shouting from the study but was too afraid to intervene.'
        ],
        lies: [
          'Claims she was in the greenhouse all afternoon to avoid admitting she was near the study.'
        ],
        knows: [
          'Saw Arthur walking outside at 1:10 PM but he never came through the front door.'
        ],
        subtleClues: {
          surface: [
            'Visibly upset, shaking, and pale long before the body was discovered.'
          ]
        },
        relationships: {
          son: 'Frets over his happiness, blindly protective.',
          maid: 'Relies on her for emotional support and comfort.'
        }
      },

      son: {
        id: 'son',
        name: 'Arthur Sterling',
        role: 'The Son',
        personality: 'Arrogant, Desperate, Sharp.',
        alibi: 'Claims his car broke down on the back dirt road and he jogged to the house.',
        secrets: [
          'He used an old key to sneak in through the side gate at 1:10 PM.',
          'He killed his father with a paperweight after learning about the will.'
        ],
        lies: [
          'Claims the garden mulch and sweat are from jogging through the woods after his car died.',
          'Denies ever being inside the study before 2:00 PM.'
        ],
        knows: [
          'Knows the contents of the new will his father was drafting.'
        ],
        subtleClues: {
          surface: [
            'Sweating profusely despite the cool weather.',
            'Keeps checking his flashy luxury watch nervously.'
          ]
        },
        relationships: {
          victim: 'Deep resentment over money and control.',
          driver: 'Acts overly casual with him to establish his fake arrival time.'
        }
      },

      maid: {
        id: 'maid',
        name: 'Maria Rossi',
        role: 'The Maid',
        personality: 'Meticulous, Observant, Sharp-tongued.',
        alibi: 'In the kitchen preparing afternoon tea from 1:35 PM to 2:00 PM.',
        secrets: [
          'She was snooping through Reginald\'s bedroom at 12:30 PM looking for loose cash.'
        ],
        lies: [
          'Lies about her exact cleaning schedule to cover up her snooping.'
        ],
        knows: [
          'Saw a car matching Arthur\'s hidden behind trees down the road at 12:30 PM.',
          'Noticed the locked side gate was wide open at 1:30 PM.'
        ],
        subtleClues: {
          surface: [
            'Gets highly defensive if asked about the master bedroom.'
          ]
        },
        relationships: {
          wife: 'Acts as her confidant, but secretly judges her.',
          gardener: 'Noticed his break schedule to sneak into the upstairs rooms.'
        }
      },

      driver: {
        id: 'driver',
        name: 'Thomas "Tommy" Miller',
        role: 'The Driver',
        personality: 'Loyal, Stoic, Apathetic.',
        alibi: 'In the garage buffing the car wax and listening to the radio.',
        secrets: [
          'Reginald had threatened to fire him next week because his eyesight is failing.'
        ],
        lies: [
          'Might pretend he didn\'t hear the argument because he resents Reginald.'
        ],
        knows: [
          'Arthur arrived on foot looking disheveled and out of breath at 1:50 PM.',
          'Arthur ducked behind a hedge to wipe his face before approaching the door.'
        ],
        subtleClues: {
          surface: [
            'Squints frequently; cleans his glasses more than necessary.'
          ]
        },
        relationships: {
          son: 'Observes his erratic behavior but doesn\'t usually intervene.'
        }
      },

      gardener: {
        id: 'gardener',
        name: 'Gary',
        role: 'The Gardener',
        personality: 'Quiet, Introverted, Nature-loving.',
        alibi: 'Tending to the flowers in the West Garden.',
        secrets: [
          'He avoids social interaction at all costs, which is why he didn\'t report the open gate immediately.'
        ],
        lies: [
          'Initially denies seeing anything near the study to avoid getting involved with the police.'
        ],
        knows: [
          'Saw the usually locked side gate slightly ajar and locked it himself around 1:55 PM.',
          'Saw a distinct shadow moving frantically inside the study at 1:45 PM.'
        ],
        subtleClues: {
          surface: [
            'Keeps his head down, avoids eye contact when spoken to, grips his hat tightly.'
          ]
        },
        relationships: {
          maid: 'Avoids her; works his schedule around others to be entirely alone.'
        }
      }
    }
  },
  knives_out: {
    id: 'knives_out',
    title: 'The Blood on the Estate',

    casefile: {
      headline: 'Famed Mystery Author Found Dead in His Study',
      overview: `
Harlan, a massively wealthy crime novelist, was found dead in his attic study the morning after his 85th birthday party. His throat was slit, and the knife was still in his hand. 

At first glance, it looks like a tragic suicide. However, an anonymous tip brought the police back to the estate. The family had been gathering to celebrate, but tensions were high, and Harlan had been having private, heated conversations with his children all night. 

The most crucial piece of the puzzle is the coroner's report: despite rumors of a medical emergency, Harlan's toxicology report came back completely clean. No drugs, no poison. 

Just a house full of greedy relatives, a terrified nurse, and a lot of muddy footprints.
      `,
      objective: `
Interrogate the family and the nurse. Someone in this house orchestrated this death, but their plan didn't go exactly as they intended. Compare their assumptions against the hard facts of the police report.

When you catch the mastermind in a lie they cannot explain, make your accusation.
      `,
      crimeSceneNotes: [
        'Cause of death: A single self-inflicted knife wound to the neck.',
        'Toxicology Report: 100% clean. Zero traces of poison or medication in the bloodstream.',
        'A piece of the wooden trellis outside the study window is snapped.',
        'There are traces of dried mud on the study windowsill.'
      ]
    },

    truth: {
      murderer: 'hugh',
      weapon: 'Tampered medicine bottles (failed), leading to suicide',
      motive: 'Harlan cut him out of the will entirely. He wanted to frame the nurse to invalidate the new will.'
    },

    setting: {
      location: 'The Thrombey Estate',
      atmosphere: 'A massive, gothic mansion filled with fake prop weapons, hidden windows, and dark wood paneling. It feels like a giant Clue board.',
      time: 'The morning after the birthday party. The critical window is midnight to 2:00 AM.'
    },

    backstory: {
      familyHistory: 'Harlan built a publishing empire from nothing. His family is entirely dependent on his wealth.',
      hiddenScandal: 'Harlan changed his will the night he died, leaving absolutely everything to his nurse.',
      financialPressure: 'Harlan cut off his son\'s allowance, fired his other son from the company, and discovered his son-in-law was cheating.',
      recentEvent: 'Harlan had a massive, screaming fight with his grandson, Hugh, who stormed out of the party early.'
    },

    timeline: {
      23.30: 'Harlan and Marta go upstairs to the study to play Go. The rest of the family goes to bed.',
      23.45: 'Marta administers Harlan\'s medication. Harlan slits his own throat.',
      "00.00": 'Marta leaves through the front door, seen by Walt.',
      "00.15": 'Marta sneaks back onto the estate, climbs the broken trellis, and puts on a disguise to be seen by Lin.',
      "01.00": 'Hugh sneaks onto the estate to retrieve the tampered medicine bottles but is scared off by the dogs.'
    },

    victim: {
      name: 'Harlan',
      role: 'The Patriarch',
      personality: 'Brilliant, stubborn, dramatic.',
      reputation: 'A genius writer who finally decided to stop coddling his spoiled family.'
    },

    characters: {
      nurse: {
        id: 'nurse',
        name: 'Marta',
        role: 'The Caregiver',
        personality: 'Kind, anxious, terrified.',
        alibi: 'Claims she left at midnight and drove straight home.',
        secrets: [
          'She thinks she accidentally gave Harlan a lethal overdose of morphine because the labels were switched.',
          'She knows Harlan killed himself to protect her from a manslaughter charge.',
          'She climbed the trellis to fake Harlan\'s time of death.'
        ],
        lies: [
          'She will lie about the timeline and the broken trellis to protect Harlan\'s final plan.'
        ],
        knows: [
          'She physically cannot lie without becoming violently nauseous.'
        ],
        subtleClues: {
          surface: [
            'Sweats profusely and covers her mouth when asked direct questions about her timeline.'
          ]
        },
        relationships: {
          victim: 'Loved him like a father; is devastated by his death.',
          grandson: 'Wary of Hugh, but desperate enough for help to trust him.'
        }
      },

      grandson: {
        id: 'grandson',
        name: 'Hugh',
        role: 'The Mastermind',
        personality: 'Arrogant, smug, privileged.',
        alibi: 'Claims he left the party at 10:00 PM after a fight and drove into the city.',
        secrets: [
          'He switched the medicine labels to trick Marta into killing Harlan with morphine.',
          'He sneaked back at 1:00 AM to steal the bottles back, but the dogs barked at him.'
        ],
        lies: [
          'Claims he has no idea why Harlan killed himself or what happened with the will.'
        ],
        knows: [
          'He believes, with absolute certainty, that Harlan died of a morphine overdose before slitting his throat.'
        ],
        subtleClues: {
          surface: [
            'Acts completely unbothered by the death; wears an expensive, thick cable-knit sweater.'
          ]
        },
        relationships: {
          victim: 'Hated him for cutting him out of the will.',
          nurse: 'Pretends to be her ally, but is secretly framing her.'
        }
      },

      daughter: {
        id: 'daughter',
        name: 'Lin',
        role: 'The Eldest Daughter',
        personality: 'Fierce, protective, intimidating.',
        alibi: 'Was asleep in her room on the second floor.',
        secrets: [
          'Harlan was about to expose her husband for having an affair.'
        ],
        lies: [
          'Might downplay the tension in the family to protect their public image.'
        ],
        knows: [
          'She woke up at 12:15 AM and saw "Harlan" (actually Marta in a disguise) walk past the study window.'
        ],
        subtleClues: {
          surface: [
            'Speaks very highly of her self-made business, deeply defensive of her father.'
          ]
        },
        relationships: {
          victim: 'Deeply respected him; they communicated through secret invisible ink letters.'
        }
      },

      son: {
        id: 'son',
        name: 'Walt',
        role: 'The Youngest Son',
        personality: 'Insecure, desperate, weak-willed.',
        alibi: 'Smoking a cigar on the porch at midnight.',
        secrets: [
          'Harlan fired him from the publishing company that very night.'
        ],
        lies: [
          'Claims he and Harlan had a great conversation and a mutual parting of ways.'
        ],
        knows: [
          'He saw Marta leave the house at exactly midnight.'
        ],
        subtleClues: {
          surface: [
            'Fidgets with his cane, gets incredibly defensive about his role in the publishing company.'
          ]
        },
        relationships: {
          victim: 'Resented him for never letting him have real control over the business.'
        }
      }
    }
  }
};