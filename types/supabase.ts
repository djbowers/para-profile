export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[];

export type Database = {
  public: {
    Tables: {
      movement_logs: {
        Row: {
          created_at: string | null;
          id: number;
          movement_name: string;
          rep_scheme: number[];
          user_id: string;
          weight_one_unit: Database['public']['Enums']['weight_unit'] | null;
          weight_one_value: number | null;
          weight_two_unit: Database['public']['Enums']['weight_unit'] | null;
          weight_two_value: number | null;
          workout_log_id: number;
        };
        Insert: {
          created_at?: string | null;
          id?: number;
          movement_name: string;
          rep_scheme?: number[];
          user_id: string;
          weight_one_unit?: Database['public']['Enums']['weight_unit'] | null;
          weight_one_value?: number | null;
          weight_two_unit?: Database['public']['Enums']['weight_unit'] | null;
          weight_two_value?: number | null;
          workout_log_id: number;
        };
        Update: {
          created_at?: string | null;
          id?: number;
          movement_name?: string;
          rep_scheme?: number[];
          user_id?: string;
          weight_one_unit?: Database['public']['Enums']['weight_unit'] | null;
          weight_one_value?: number | null;
          weight_two_unit?: Database['public']['Enums']['weight_unit'] | null;
          weight_two_value?: number | null;
          workout_log_id?: number;
        };
        Relationships: [
          {
            foreignKeyName: 'movement_logs_workout_log_id_fkey';
            columns: ['workout_log_id'];
            isOneToOne: false;
            referencedRelation: 'workout_logs';
            referencedColumns: ['id'];
          },
        ];
      };
      movements: {
        Row: {
          '# Primary Items': number | null;
          '# Secondary Items': number | null;
          'Body Region': Database['public']['Enums']['Body Region'] | null;
          'Combination Exercises':
            | Database['public']['Enums']['Combination Exercises']
            | null;
          'Continuous or Alternating Arms':
            | Database['public']['Enums']['Continuous or Alternating']
            | null;
          'Continuous or Alternating Legs':
            | Database['public']['Enums']['Continuous or Alternating']
            | null;
          'Difficulty Level':
            | Database['public']['Enums']['Difficulty Level']
            | null;
          'Foot Elevation':
            | Database['public']['Enums']['Foot Elevation']
            | null;
          'Force Type': Database['public']['Enums']['Force Type'] | null;
          Grip: Database['public']['Enums']['Grip'] | null;
          id: string;
          'In-Depth YouTube Explanation': string | null;
          Laterality: Database['public']['Enums']['Laterality'] | null;
          'Load Position (Ending)':
            | Database['public']['Enums']['Load Position']
            | null;
          Mechanics: Database['public']['Enums']['Mechanics'] | null;
          Movement: string;
          'Movement Pattern #1':
            | Database['public']['Enums']['Movement Pattern']
            | null;
          'Movement Pattern #2':
            | Database['public']['Enums']['Movement Pattern']
            | null;
          'Movement Pattern #3':
            | Database['public']['Enums']['Movement Pattern']
            | null;
          'Plane Of Motion #1':
            | Database['public']['Enums']['Plane of Motion']
            | null;
          'Plane Of Motion #2':
            | Database['public']['Enums']['Plane of Motion']
            | null;
          'Plane Of Motion #3':
            | Database['public']['Enums']['Plane of Motion']
            | null;
          Posture: Database['public']['Enums']['Posture'] | null;
          'Primary Equipment': Database['public']['Enums']['Equipment'] | null;
          'Primary Exercise Classification':
            | Database['public']['Enums']['Exercise Classification']
            | null;
          'Prime Mover Muscle': Database['public']['Enums']['Muscles'] | null;
          'Secondary Equipment':
            | Database['public']['Enums']['Equipment']
            | null;
          'Secondary Muscle': Database['public']['Enums']['Muscles'] | null;
          'Short YouTube Demonstration': string | null;
          'Single or Double Arm':
            | Database['public']['Enums']['Single or Double Arm']
            | null;
          'Target Muscle Group':
            | Database['public']['Enums']['Muscle Group']
            | null;
          'Tertiary Muscle': Database['public']['Enums']['Muscles'] | null;
        };
        Insert: {
          '# Primary Items'?: number | null;
          '# Secondary Items'?: number | null;
          'Body Region'?: Database['public']['Enums']['Body Region'] | null;
          'Combination Exercises'?:
            | Database['public']['Enums']['Combination Exercises']
            | null;
          'Continuous or Alternating Arms'?:
            | Database['public']['Enums']['Continuous or Alternating']
            | null;
          'Continuous or Alternating Legs'?:
            | Database['public']['Enums']['Continuous or Alternating']
            | null;
          'Difficulty Level'?:
            | Database['public']['Enums']['Difficulty Level']
            | null;
          'Foot Elevation'?:
            | Database['public']['Enums']['Foot Elevation']
            | null;
          'Force Type'?: Database['public']['Enums']['Force Type'] | null;
          Grip?: Database['public']['Enums']['Grip'] | null;
          id?: string;
          'In-Depth YouTube Explanation'?: string | null;
          Laterality?: Database['public']['Enums']['Laterality'] | null;
          'Load Position (Ending)'?:
            | Database['public']['Enums']['Load Position']
            | null;
          Mechanics?: Database['public']['Enums']['Mechanics'] | null;
          Movement: string;
          'Movement Pattern #1'?:
            | Database['public']['Enums']['Movement Pattern']
            | null;
          'Movement Pattern #2'?:
            | Database['public']['Enums']['Movement Pattern']
            | null;
          'Movement Pattern #3'?:
            | Database['public']['Enums']['Movement Pattern']
            | null;
          'Plane Of Motion #1'?:
            | Database['public']['Enums']['Plane of Motion']
            | null;
          'Plane Of Motion #2'?:
            | Database['public']['Enums']['Plane of Motion']
            | null;
          'Plane Of Motion #3'?:
            | Database['public']['Enums']['Plane of Motion']
            | null;
          Posture?: Database['public']['Enums']['Posture'] | null;
          'Primary Equipment'?: Database['public']['Enums']['Equipment'] | null;
          'Primary Exercise Classification'?:
            | Database['public']['Enums']['Exercise Classification']
            | null;
          'Prime Mover Muscle'?: Database['public']['Enums']['Muscles'] | null;
          'Secondary Equipment'?:
            | Database['public']['Enums']['Equipment']
            | null;
          'Secondary Muscle'?: Database['public']['Enums']['Muscles'] | null;
          'Short YouTube Demonstration'?: string | null;
          'Single or Double Arm'?:
            | Database['public']['Enums']['Single or Double Arm']
            | null;
          'Target Muscle Group'?:
            | Database['public']['Enums']['Muscle Group']
            | null;
          'Tertiary Muscle'?: Database['public']['Enums']['Muscles'] | null;
        };
        Update: {
          '# Primary Items'?: number | null;
          '# Secondary Items'?: number | null;
          'Body Region'?: Database['public']['Enums']['Body Region'] | null;
          'Combination Exercises'?:
            | Database['public']['Enums']['Combination Exercises']
            | null;
          'Continuous or Alternating Arms'?:
            | Database['public']['Enums']['Continuous or Alternating']
            | null;
          'Continuous or Alternating Legs'?:
            | Database['public']['Enums']['Continuous or Alternating']
            | null;
          'Difficulty Level'?:
            | Database['public']['Enums']['Difficulty Level']
            | null;
          'Foot Elevation'?:
            | Database['public']['Enums']['Foot Elevation']
            | null;
          'Force Type'?: Database['public']['Enums']['Force Type'] | null;
          Grip?: Database['public']['Enums']['Grip'] | null;
          id?: string;
          'In-Depth YouTube Explanation'?: string | null;
          Laterality?: Database['public']['Enums']['Laterality'] | null;
          'Load Position (Ending)'?:
            | Database['public']['Enums']['Load Position']
            | null;
          Mechanics?: Database['public']['Enums']['Mechanics'] | null;
          Movement?: string;
          'Movement Pattern #1'?:
            | Database['public']['Enums']['Movement Pattern']
            | null;
          'Movement Pattern #2'?:
            | Database['public']['Enums']['Movement Pattern']
            | null;
          'Movement Pattern #3'?:
            | Database['public']['Enums']['Movement Pattern']
            | null;
          'Plane Of Motion #1'?:
            | Database['public']['Enums']['Plane of Motion']
            | null;
          'Plane Of Motion #2'?:
            | Database['public']['Enums']['Plane of Motion']
            | null;
          'Plane Of Motion #3'?:
            | Database['public']['Enums']['Plane of Motion']
            | null;
          Posture?: Database['public']['Enums']['Posture'] | null;
          'Primary Equipment'?: Database['public']['Enums']['Equipment'] | null;
          'Primary Exercise Classification'?:
            | Database['public']['Enums']['Exercise Classification']
            | null;
          'Prime Mover Muscle'?: Database['public']['Enums']['Muscles'] | null;
          'Secondary Equipment'?:
            | Database['public']['Enums']['Equipment']
            | null;
          'Secondary Muscle'?: Database['public']['Enums']['Muscles'] | null;
          'Short YouTube Demonstration'?: string | null;
          'Single or Double Arm'?:
            | Database['public']['Enums']['Single or Double Arm']
            | null;
          'Target Muscle Group'?:
            | Database['public']['Enums']['Muscle Group']
            | null;
          'Tertiary Muscle'?: Database['public']['Enums']['Muscles'] | null;
        };
        Relationships: [];
      };
      profiles: {
        Row: {
          avatar_url: string | null;
          full_name: string | null;
          id: string;
          updated_at: string | null;
          username: string | null;
          website: string | null;
        };
        Insert: {
          avatar_url?: string | null;
          full_name?: string | null;
          id: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Update: {
          avatar_url?: string | null;
          full_name?: string | null;
          id?: string;
          updated_at?: string | null;
          username?: string | null;
          website?: string | null;
        };
        Relationships: [];
      };
      progress_items: {
        Row: {
          category: string;
          created_at: string | null;
          icon_name: string | null;
          id: string;
          level: number;
          max_xp: number;
          name: string;
          progress: number;
          type: string;
          updated_at: string | null;
          user_id: string;
          xp: number;
        };
        Insert: {
          category: string;
          created_at?: string | null;
          icon_name?: string | null;
          id?: string;
          level?: number;
          max_xp?: number;
          name: string;
          progress?: number;
          type: string;
          updated_at?: string | null;
          user_id: string;
          xp?: number;
        };
        Update: {
          category?: string;
          created_at?: string | null;
          icon_name?: string | null;
          id?: string;
          level?: number;
          max_xp?: number;
          name?: string;
          progress?: number;
          type?: string;
          updated_at?: string | null;
          user_id?: string;
          xp?: number;
        };
        Relationships: [];
      };
      workout_logs: {
        Row: {
          bells: number[];
          completed_at: string;
          completed_reps: number;
          completed_rounds: number;
          completed_rungs: number;
          completed_volume: number | null;
          id: number;
          interval_timer: number;
          is_one_handed: boolean | null;
          movements: string[];
          rep_scheme: number[];
          rest_timer: number;
          rpe: Database['public']['Enums']['RPE'] | null;
          started_at: string;
          unit: string | null;
          user_id: string;
          workout_details: string | null;
          workout_goal: number;
          workout_goal_units: Database['public']['Enums']['workout_goal_units'];
          workout_notes: string | null;
        };
        Insert: {
          bells?: number[];
          completed_at?: string;
          completed_reps: number;
          completed_rounds: number;
          completed_rungs: number;
          completed_volume?: number | null;
          id?: number;
          interval_timer?: number;
          is_one_handed?: boolean | null;
          movements: string[];
          rep_scheme?: number[];
          rest_timer?: number;
          rpe?: Database['public']['Enums']['RPE'] | null;
          started_at: string;
          unit?: string | null;
          user_id: string;
          workout_details?: string | null;
          workout_goal: number;
          workout_goal_units?: Database['public']['Enums']['workout_goal_units'];
          workout_notes?: string | null;
        };
        Update: {
          bells?: number[];
          completed_at?: string;
          completed_reps?: number;
          completed_rounds?: number;
          completed_rungs?: number;
          completed_volume?: number | null;
          id?: number;
          interval_timer?: number;
          is_one_handed?: boolean | null;
          movements?: string[];
          rep_scheme?: number[];
          rest_timer?: number;
          rpe?: Database['public']['Enums']['RPE'] | null;
          started_at?: string;
          unit?: string | null;
          user_id?: string;
          workout_details?: string | null;
          workout_goal?: number;
          workout_goal_units?: Database['public']['Enums']['workout_goal_units'];
          workout_notes?: string | null;
        };
        Relationships: [];
      };
    };
    Views: {
      [_ in never]: never;
    };
    Functions: {
      [_ in never]: never;
    };
    Enums: {
      'Body Region':
        | 'Full Body'
        | 'Lower Body'
        | 'Midsection'
        | 'Unsorted*'
        | 'Upper Body';
      'Combination Exercises': 'Single Exercise' | 'Combo Exercise';
      'Continuous or Alternating': 'Alternating' | 'Continuous';
      'Difficulty Level':
        | 'Beginner'
        | 'Intermediate'
        | 'Novice'
        | 'Advanced'
        | 'Expert'
        | 'Grand Master'
        | 'Master'
        | 'Legendary';
      Equipment:
        | 'Ab Wheel'
        | 'Barbell'
        | 'Battle Ropes'
        | 'Bodyweight'
        | 'Bulgarian Bag'
        | 'Cable'
        | 'Clubbell'
        | 'Dumbbell'
        | 'EZ Bar'
        | 'Gymnastic Rings'
        | 'Heavy Sandbag'
        | 'Indian Club'
        | 'Kettlebell'
        | 'Landmine'
        | 'Macebell'
        | 'Medicine Ball'
        | 'Miniband'
        | 'Parallette Bars'
        | 'Pull Up Bar'
        | 'Resistance Band'
        | 'Sandbag'
        | 'Slam Ball'
        | 'Sled'
        | 'Sliders'
        | 'Stability Ball'
        | 'Superband'
        | 'Suspension Trainer'
        | 'Tire'
        | 'Trap Bar'
        | 'Wall Ball'
        | 'Weight Plate'
        | 'None'
        | 'Bench (Flat)'
        | 'Bench (Incline)'
        | 'Bench (Decline)'
        | 'Plyo Box'
        | 'Slant Board'
        | 'Sledge Hammer'
        | 'Gravity Boots';
      'Exercise Classification':
        | 'Animal Flow'
        | 'Balance'
        | 'Ballistics'
        | 'Bodybuilding'
        | 'Calisthenics'
        | 'Grinds'
        | 'Mobility'
        | 'Olympic Weightlifting'
        | 'Plyometric'
        | 'Postural'
        | 'Powerlifting'
        | 'Unsorted*';
      'Foot Elevation':
        | 'Feet Elevated'
        | 'Foot Elevated'
        | 'Foot Elevated (Front)'
        | 'Foot Elevated (Lateral)'
        | 'Foot Elevated (Rear)'
        | 'Foot Elevated (Side)'
        | 'Heels Elevated'
        | 'No Elevation'
        | 'Toes Elevated';
      'Force Type': 'Other' | 'Pull' | 'Push' | 'Push & Pull' | 'Unsorted*';
      Grip:
        | 'Bottoms Up'
        | 'Bottoms Up Horn Grip'
        | 'Crush Grip'
        | 'False Grip'
        | 'Fingertip'
        | 'Flat Palm'
        | 'Forearm'
        | 'Goblet'
        | 'Hand Assisted'
        | 'Head Supported'
        | 'Horn Grip'
        | 'Mixed Grip'
        | 'Neutral'
        | 'No Grip'
        | 'Other'
        | 'Pronated'
        | 'Supinated'
        | 'Waiter Hold';
      Laterality: 'Contralateral' | 'Bilateral' | 'Unilateral' | 'Ipsilateral';
      'Load Position':
        | 'Above Chest'
        | 'Back Rack'
        | 'Bear Hug'
        | 'Behind Back'
        | 'Front Rack'
        | 'Hip Crease'
        | 'Lateral'
        | 'Low Hold'
        | 'No Load'
        | 'Order'
        | 'Other'
        | 'Overhead'
        | 'Shoulder'
        | 'Suitcase'
        | 'Zercher';
      Mechanics: 'Compound' | 'Isolation' | 'Pull';
      'Movement Pattern':
        | 'Ankle Dorsiflexion'
        | 'Ankle Plantar Flexion'
        | 'Anti-Extension'
        | 'Anti-Flexion'
        | 'Anti-Lateral Flexion'
        | 'Anti-Rotational'
        | 'Elbow Extension'
        | 'Elbow Flexion'
        | 'Hip Abduction'
        | 'Hip Adduction'
        | 'Hip Dominant'
        | 'Hip Extension'
        | 'Hip External Rotation'
        | 'Hip Flexion'
        | 'Hip Hinge'
        | 'Horizontal Pull'
        | 'Horizontal Push'
        | 'Isometric Hold'
        | 'Knee Dominant'
        | 'Lateral Flexion'
        | 'Loaded Carry'
        | 'Rotational'
        | 'Scapular Elevation'
        | 'Shoulder Abduction'
        | 'Shoulder External Rotation'
        | 'Shoulder Flexion'
        | 'Shoulder Internal Rotation'
        | 'Shoulder Scapular Plane Elevation'
        | 'Spinal Extension'
        | 'Spinal Flexion'
        | 'Unsorted*'
        | 'Vertical Pull'
        | 'Vertical Push'
        | 'Wrist Extension'
        | 'Wrist Flexion'
        | 'Spinal Rotational'
        | 'Hip Internal Rotation'
        | 'Other';
      'Muscle Group':
        | 'Abdominals'
        | 'Glutes'
        | 'Chest'
        | 'Shoulders'
        | 'Back'
        | 'Adductors'
        | 'Biceps'
        | 'Quadriceps'
        | 'Hamstrings'
        | 'Abductors'
        | 'Trapezius'
        | 'Triceps'
        | 'Forearms'
        | 'Calves'
        | 'Shins'
        | 'Hip Flexors';
      Muscles:
        | 'Rectus Abdominis'
        | 'Gluteus Maximus'
        | 'Obliques'
        | 'Pectoralis Major'
        | 'Posterior Deltoids'
        | 'Latissimus Dorsi'
        | 'Adductor Magnus'
        | 'Biceps Brachii'
        | 'Quadriceps Femoris'
        | 'Anterior Deltoids'
        | 'Biceps Femoris'
        | 'Gluteus Medius'
        | 'Upper Trapezius'
        | 'Triceps Brachii'
        | 'Brachioradialis'
        | 'Erector Spinae'
        | 'Infraspinatus'
        | 'Lateral Deltoids'
        | 'Gastrocnemius'
        | 'Tibialis Anterior'
        | 'Iliopsoas'
        | 'Subscapularis'
        | 'Soleus'
        | 'Vastus Mediais'
        | 'Rectus Femoris'
        | 'Serratus Anterior'
        | 'Teres Minor'
        | 'Gluteus Minimus'
        | 'Tensor Fasciae Latae'
        | 'Levator Scapulae'
        | 'Rhomboids'
        | 'Brachialis'
        | 'Anconeus'
        | 'Flexor Carpi Radialis'
        | 'Medial Deltoids'
        | 'Supraspinatus'
        | 'Extensor Digitorum Longus'
        | 'Extensor Hallucis Longus'
        | 'Trapezius'
        | 'Teres Major'
        | 'Tibialis Posterior';
      'Plane of Motion':
        | 'Frontal Plane'
        | 'Sagittal Plane'
        | 'Transverse Plane';
      Posture:
        | '90/90 Seated'
        | 'Bridge'
        | 'Half Kneeling'
        | 'Hanging'
        | 'Horse Stance'
        | 'Inverted'
        | 'Knee Hover Quadruped'
        | 'Knee Over Toe Split Squat'
        | 'Knee Supported'
        | 'Kneeling'
        | 'L Sit'
        | 'March'
        | 'Other'
        | 'Prone'
        | 'Quadruped'
        | 'Seated'
        | 'Seated Floor'
        | 'Shin Box Seated'
        | 'Side Lying'
        | 'Side Plank'
        | 'Single Leg Bridge'
        | 'Single Leg Standing'
        | 'Single Leg Standing Bent Knee'
        | 'Single Leg Supported'
        | 'Split Squat'
        | 'Split Squat Isometric'
        | 'Staggered Stance'
        | 'Standing'
        | 'Supine'
        | 'Tall Kneeling'
        | 'Toe Balance'
        | 'Tuck L Sit'
        | 'V Sit Seated'
        | 'Walking'
        | 'Wall Sit';
      RPE: 'noEffort' | 'easy' | 'ideal' | 'hard' | 'maxEffort';
      'Single or Double Arm': 'Single Arm' | 'No Arms' | 'Double Arm';
      weight_unit: 'kilograms' | 'pounds';
      workout_goal_units: 'minutes' | 'rounds';
    };
    CompositeTypes: {
      [_ in never]: never;
    };
  };
};

type DefaultSchema = Database[Extract<keyof Database, 'public'>];

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema['Tables'] & DefaultSchema['Views'])
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
        Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? (Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'] &
      Database[DefaultSchemaTableNameOrOptions['schema']]['Views'])[TableName] extends {
      Row: infer R;
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema['Tables'] &
        DefaultSchema['Views'])
    ? (DefaultSchema['Tables'] &
        DefaultSchema['Views'])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R;
      }
      ? R
      : never
    : never;

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Insert: infer I;
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I;
      }
      ? I
      : never
    : never;

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema['Tables']
    | { schema: keyof Database },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaTableNameOrOptions['schema']]['Tables']
    : never = never,
> = DefaultSchemaTableNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaTableNameOrOptions['schema']]['Tables'][TableName] extends {
      Update: infer U;
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema['Tables']
    ? DefaultSchema['Tables'][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U;
      }
      ? U
      : never
    : never;

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema['Enums']
    | { schema: keyof Database },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums']
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends { schema: keyof Database }
  ? Database[DefaultSchemaEnumNameOrOptions['schema']]['Enums'][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema['Enums']
    ? DefaultSchema['Enums'][DefaultSchemaEnumNameOrOptions]
    : never;

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema['CompositeTypes']
    | { schema: keyof Database },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof Database;
  }
    ? keyof Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes']
    : never = never,
> = PublicCompositeTypeNameOrOptions extends { schema: keyof Database }
  ? Database[PublicCompositeTypeNameOrOptions['schema']]['CompositeTypes'][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema['CompositeTypes']
    ? DefaultSchema['CompositeTypes'][PublicCompositeTypeNameOrOptions]
    : never;

export const Constants = {
  public: {
    Enums: {
      'Body Region': [
        'Full Body',
        'Lower Body',
        'Midsection',
        'Unsorted*',
        'Upper Body',
      ],
      'Combination Exercises': ['Single Exercise', 'Combo Exercise'],
      'Continuous or Alternating': ['Alternating', 'Continuous'],
      'Difficulty Level': [
        'Beginner',
        'Intermediate',
        'Novice',
        'Advanced',
        'Expert',
        'Grand Master',
        'Master',
        'Legendary',
      ],
      Equipment: [
        'Ab Wheel',
        'Barbell',
        'Battle Ropes',
        'Bodyweight',
        'Bulgarian Bag',
        'Cable',
        'Clubbell',
        'Dumbbell',
        'EZ Bar',
        'Gymnastic Rings',
        'Heavy Sandbag',
        'Indian Club',
        'Kettlebell',
        'Landmine',
        'Macebell',
        'Medicine Ball',
        'Miniband',
        'Parallette Bars',
        'Pull Up Bar',
        'Resistance Band',
        'Sandbag',
        'Slam Ball',
        'Sled',
        'Sliders',
        'Stability Ball',
        'Superband',
        'Suspension Trainer',
        'Tire',
        'Trap Bar',
        'Wall Ball',
        'Weight Plate',
        'None',
        'Bench (Flat)',
        'Bench (Incline)',
        'Bench (Decline)',
        'Plyo Box',
        'Slant Board',
        'Sledge Hammer',
        'Gravity Boots',
      ],
      'Exercise Classification': [
        'Animal Flow',
        'Balance',
        'Ballistics',
        'Bodybuilding',
        'Calisthenics',
        'Grinds',
        'Mobility',
        'Olympic Weightlifting',
        'Plyometric',
        'Postural',
        'Powerlifting',
        'Unsorted*',
      ],
      'Foot Elevation': [
        'Feet Elevated',
        'Foot Elevated',
        'Foot Elevated (Front)',
        'Foot Elevated (Lateral)',
        'Foot Elevated (Rear)',
        'Foot Elevated (Side)',
        'Heels Elevated',
        'No Elevation',
        'Toes Elevated',
      ],
      'Force Type': ['Other', 'Pull', 'Push', 'Push & Pull', 'Unsorted*'],
      Grip: [
        'Bottoms Up',
        'Bottoms Up Horn Grip',
        'Crush Grip',
        'False Grip',
        'Fingertip',
        'Flat Palm',
        'Forearm',
        'Goblet',
        'Hand Assisted',
        'Head Supported',
        'Horn Grip',
        'Mixed Grip',
        'Neutral',
        'No Grip',
        'Other',
        'Pronated',
        'Supinated',
        'Waiter Hold',
      ],
      Laterality: ['Contralateral', 'Bilateral', 'Unilateral', 'Ipsilateral'],
      'Load Position': [
        'Above Chest',
        'Back Rack',
        'Bear Hug',
        'Behind Back',
        'Front Rack',
        'Hip Crease',
        'Lateral',
        'Low Hold',
        'No Load',
        'Order',
        'Other',
        'Overhead',
        'Shoulder',
        'Suitcase',
        'Zercher',
      ],
      Mechanics: ['Compound', 'Isolation', 'Pull'],
      'Movement Pattern': [
        'Ankle Dorsiflexion',
        'Ankle Plantar Flexion',
        'Anti-Extension',
        'Anti-Flexion',
        'Anti-Lateral Flexion',
        'Anti-Rotational',
        'Elbow Extension',
        'Elbow Flexion',
        'Hip Abduction',
        'Hip Adduction',
        'Hip Dominant',
        'Hip Extension',
        'Hip External Rotation',
        'Hip Flexion',
        'Hip Hinge',
        'Horizontal Pull',
        'Horizontal Push',
        'Isometric Hold',
        'Knee Dominant',
        'Lateral Flexion',
        'Loaded Carry',
        'Rotational',
        'Scapular Elevation',
        'Shoulder Abduction',
        'Shoulder External Rotation',
        'Shoulder Flexion',
        'Shoulder Internal Rotation',
        'Shoulder Scapular Plane Elevation',
        'Spinal Extension',
        'Spinal Flexion',
        'Unsorted*',
        'Vertical Pull',
        'Vertical Push',
        'Wrist Extension',
        'Wrist Flexion',
        'Spinal Rotational',
        'Hip Internal Rotation',
        'Other',
      ],
      'Muscle Group': [
        'Abdominals',
        'Glutes',
        'Chest',
        'Shoulders',
        'Back',
        'Adductors',
        'Biceps',
        'Quadriceps',
        'Hamstrings',
        'Abductors',
        'Trapezius',
        'Triceps',
        'Forearms',
        'Calves',
        'Shins',
        'Hip Flexors',
      ],
      Muscles: [
        'Rectus Abdominis',
        'Gluteus Maximus',
        'Obliques',
        'Pectoralis Major',
        'Posterior Deltoids',
        'Latissimus Dorsi',
        'Adductor Magnus',
        'Biceps Brachii',
        'Quadriceps Femoris',
        'Anterior Deltoids',
        'Biceps Femoris',
        'Gluteus Medius',
        'Upper Trapezius',
        'Triceps Brachii',
        'Brachioradialis',
        'Erector Spinae',
        'Infraspinatus',
        'Lateral Deltoids',
        'Gastrocnemius',
        'Tibialis Anterior',
        'Iliopsoas',
        'Subscapularis',
        'Soleus',
        'Vastus Mediais',
        'Rectus Femoris',
        'Serratus Anterior',
        'Teres Minor',
        'Gluteus Minimus',
        'Tensor Fasciae Latae',
        'Levator Scapulae',
        'Rhomboids',
        'Brachialis',
        'Anconeus',
        'Flexor Carpi Radialis',
        'Medial Deltoids',
        'Supraspinatus',
        'Extensor Digitorum Longus',
        'Extensor Hallucis Longus',
        'Trapezius',
        'Teres Major',
        'Tibialis Posterior',
      ],
      'Plane of Motion': [
        'Frontal Plane',
        'Sagittal Plane',
        'Transverse Plane',
      ],
      Posture: [
        '90/90 Seated',
        'Bridge',
        'Half Kneeling',
        'Hanging',
        'Horse Stance',
        'Inverted',
        'Knee Hover Quadruped',
        'Knee Over Toe Split Squat',
        'Knee Supported',
        'Kneeling',
        'L Sit',
        'March',
        'Other',
        'Prone',
        'Quadruped',
        'Seated',
        'Seated Floor',
        'Shin Box Seated',
        'Side Lying',
        'Side Plank',
        'Single Leg Bridge',
        'Single Leg Standing',
        'Single Leg Standing Bent Knee',
        'Single Leg Supported',
        'Split Squat',
        'Split Squat Isometric',
        'Staggered Stance',
        'Standing',
        'Supine',
        'Tall Kneeling',
        'Toe Balance',
        'Tuck L Sit',
        'V Sit Seated',
        'Walking',
        'Wall Sit',
      ],
      RPE: ['noEffort', 'easy', 'ideal', 'hard', 'maxEffort'],
      'Single or Double Arm': ['Single Arm', 'No Arms', 'Double Arm'],
      weight_unit: ['kilograms', 'pounds'],
      workout_goal_units: ['minutes', 'rounds'],
    },
  },
} as const;
