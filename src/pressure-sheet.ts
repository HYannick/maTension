export const bpStatusConfig = {
  bloodPressureRanges: [
    {
      id: 'hypotension',
      systolic: { min: 0, max: 99 },
      diastolic: { min: 0, max: 59 },
      status: 'trop_basse',
      priority: 2,
      color: '#F97316',
      icon: '⬇️',
      message: 'Tension artérielle faible - Surveillez les symptômes',
      action: 'Monitor for dizziness, fatigue. Consult if symptoms persist'
    },
    {
      id: 'optimal',
      systolic: { min: 100, max: 119 },
      diastolic: { min: 60, max: 79 },
      status: 'optimale',
      priority: 5,
      color: '#22C55E',
      icon: '✅',
      message: 'Tension artérielle optimale',
      action: 'Excellent range - maintain healthy lifestyle'
    },
    {
      id: 'normal',
      systolic: { min: 120, max: 129 },
      diastolic: { min: 80, max: 84 },
      status: 'normale',
      priority: 4,
      color: '#22C55E',
      icon: '✅',
      message: 'Tension artérielle normale',
      action: 'Good range - continue current habits'
    },
    {
      id: 'normal_high',
      systolic: { min: 130, max: 139 },
      diastolic: { min: 85, max: 89 },
      status: 'normale_haute',
      priority: 3,
      color: '#EAB308',
      icon: '⚡',
      message: 'Tension artérielle normale haute',
      action: 'Consider lifestyle changes, monitor regularly'
    },
    {
      id: 'hypertension_degree1',
      systolic: { min: 140, max: 159 },
      diastolic: { min: 90, max: 99 },
      status: 'hypertension_legere',
      priority: 2,
      color: '#F97316',
      icon: '⬆️',
      message: 'Hypertension degré 1 (légère) - Consultez votre médecin',
      action: 'Medical consultation required for treatment options'
    },
    {
      id: 'hypertension_degree2',
      systolic: { min: 160, max: 179 },
      diastolic: { min: 100, max: 109 },
      status: 'hypertension_moderee',
      priority: 1,
      color: '#EF4444',
      icon: '⚠️',
      message: 'Hypertension degré 2 (modérée) - Traitement nécessaire',
      action: 'Medical treatment required - consult doctor promptly'
    },
    {
      id: 'hypertension_degree3',
      systolic: { min: 180, max: 999 },
      diastolic: { min: 110, max: 999 },
      status: 'hypertension_severe',
      priority: 1,
      color: '#EF4444',
      icon: '🚨',
      message: 'Hypertension degré 3 (sévère) - Urgence médicale',
      action: 'Emergency medical attention - call doctor immediately'
    }
  ],

  pulseRanges: [
    {
      id: 'bradycardia_severe',
      min: 0,
      max: 39,
      status: 'trop_lent',
      priority: 1,
      color: '#EF4444',
      icon: '⚠️',
      message: 'Pouls très lent - Consultez',
      context: 'Possible medication effect or heart block'
    },
    {
      id: 'bradycardia',
      min: 40,
      max: 50,
      status: 'lent',
      priority: 3,
      color: '#EAB308',
      icon: '⬇️',
      message: 'Pouls lent - Normal si médicaments',
      context: 'Common with beta-blockers'
    },
    {
      id: 'normal_low',
      min: 50,
      max: 60,
      status: 'bon',
      priority: 4,
      color: '#22C55E',
      icon: '✅',
      message: 'Pouls calme',
      context: 'Good if no symptoms'
    },
    {
      id: 'normal',
      min: 60,
      max: 80,
      status: 'excellent',
      priority: 5,
      color: '#22C55E',
      icon: '✅',
      message: 'Pouls excellent',
      context: 'Ideal range'
    },
    {
      id: 'normal_high',
      min: 80,
      max: 90,
      status: 'bon',
      priority: 4,
      color: '#22C55E',
      icon: '✅',
      message: 'Pouls normal',
      context: 'Still good'
    },
    {
      id: 'elevated',
      min: 90,
      max: 100,
      status: 'attention',
      priority: 3,
      color: '#EAB308',
      icon: '⬆️',
      message: 'Pouls un peu rapide',
      context: 'Check for stress, caffeine'
    },
    {
      id: 'tachycardia',
      min: 100,
      max: 120,
      status: 'rapide',
      priority: 2,
      color: '#F97316',
      icon: '⚠️',
      message: 'Pouls rapide - Reposez-vous',
      context: 'May need medical check'
    },
    {
      id: 'tachycardia_severe',
      min: 120,
      max: 250,
      status: 'tres_rapide',
      priority: 1,
      color: '#EF4444',
      icon: '🚨',
      message: 'Pouls très rapide - Consultez',
      context: 'Medical attention needed'
    }
  ],

  findBPRange(systolic:number, diastolic:number) {
    return this.bloodPressureRanges.find(range =>
      systolic >= range.systolic.min && systolic <= range.systolic.max &&
      diastolic >= range.diastolic.min && diastolic <= range.diastolic.max
    )
  },


  findPulseRange(pulse:number) {
    return this.pulseRanges.find(range =>
      pulse >= range.min && pulse <= range.max
    )
  },

  checkSpecialCases(systolic:number, diastolic:number) {
    const cases = []

    // Isolated systolic hypertension
    if (systolic >= 15 && diastolic < 9) {
      cases.push({
        type: 'isolated_systolic',
        message: 'Hypertension systolique isolée',
        note: 'Fréquent chez les personnes âgées'
      })
    }

    // Wide pulse pressure
    if (systolic - diastolic > 8) {
      cases.push({
        type: 'wide_pulse_pressure',
        message: 'Écart important entre les valeurs',
        note: 'À mentionner au médecin'
      })
    }

    return cases.length > 0 ? cases : null
  },

  evaluateReading(systolic:number, diastolic:number, pulse:number) {

    const sys = systolic
    const dia = diastolic

    let bpRange = null
    let highestPriority = 5

    for (const range of this.bloodPressureRanges) {
      const sysMatch = sys >= range.systolic.min && sys <= range.systolic.max
      const diaMatch = dia >= range.diastolic.min && dia <= range.diastolic.max


      if (sysMatch || diaMatch) {

        if (range.priority < highestPriority) {
          highestPriority = range.priority
          bpRange = range
        }
      }
    }

    if (!bpRange) {
      const sysRanges = this.bloodPressureRanges.filter(r =>
        sys >= r.systolic.min && sys <= r.systolic.max
      )
      const diaRanges = this.bloodPressureRanges.filter(r =>
        dia >= r.diastolic.min && dia <= r.diastolic.max
      )

      const allMatches = [...sysRanges, ...diaRanges]
      bpRange = allMatches.reduce((worst, current) =>
        current.priority < worst.priority ? current : worst
      )
    }

    const pulseRange = this.findPulseRange(pulse)

    if (!bpRange || !pulseRange) {
      return {
        status: 'error',
        message: 'Valeurs invalides - Vérifiez vos mesures',
        color: '#6B7280',
        icon: '❓'
      }
    }

    const overallPriority = Math.min(bpRange.priority, pulseRange.priority)
    const primaryRange = bpRange.priority <= pulseRange.priority ? bpRange : pulseRange

    return {
      status: primaryRange.status,
      message: primaryRange.message,
      color: primaryRange.color,
      icon: primaryRange.icon,
      priority: overallPriority,
      reading: `${sys}/${dia}`,
      details: {
        bloodPressure: bpRange,
        pulse: pulseRange,
        category: bpRange.status
      }
    }
  },

  validateReading(systolic:number, diastolic:number, pulse:number) {
    const errors = []
    const sys = systolic
    const dia = diastolic
    const pul = pulse

    if (sys < 50 || sys > 250) {
      errors.push('Tension systolique invalide (50-250 mmHg)')
    }

    if (dia < 30 || dia > 150) {
      errors.push('Tension diastolique invalide (30-150 mmHg)')
    }

    if (pul < 30 || pul > 200) {
      errors.push('Pouls invalide (30-200 bpm)')
    }

    if (sys <= dia) {
      errors.push('La tension systolique doit être supérieure à la diastolique')
    }

    if (sys - dia > 100) {
      errors.push('Écart très important entre systolique et diastolique - Vérifiez la mesure')
    }

    if (sys - dia < 20) {
      errors.push('Écart très faible entre systolique et diastolique - Peut indiquer un problème')
    }

    return errors
  },

  metadata: {
    targetAge: '60+',
    units: {
      bloodPressure: 'cmHg',
      pulse: 'bpm'
    },
    locale: 'fr-FR',
    emergencyNumber: '15',
    lastUpdated: '2025-06-27'
  }
}