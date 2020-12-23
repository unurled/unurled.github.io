const generatePreview = () => {
    //values
    const itemName = document.getElementById("itemNameField").value;
    const itemDescription = document.getElementById("itemDescriptionField").value;
    const itemSlayerType = document.getElementById('itemSlayerType').value;
    const itemSlayerLevel = document.getElementById("itemSlayerLevel").value;
    const itemRarity = document.getElementById("itemRarityField").value;
    const itemType = document.getElementById("itemTypeField").value;
    const itemDamage = document.getElementById("itemDamageField").value;
    const itemStrength = document.getElementById("itemStrengthField").value;
    const itemCritDamage = document.getElementById("itemCritDamageField").value;
    const itemCritChance = document.getElementById("itemCritChanceField").value;
    const itemAttackSpeed = document.getElementById("itemAttackSpeedField").value;
    const itemSeaCreatureChance = document.getElementById("itemSeaCreatureChanceField").value;
    const itemHealth = document.getElementById("itemHealthField").value;
    const itemDefense = document.getElementById("itemDefenseField").value;
    const itemSpeed = document.getElementById("itemSpeedField").value;
    const itemIntelligence = document.getElementById("itemIntelligenceField").value;
    const itemTrueDefense = document.getElementById("itemTrueDefenseField").value;
    const itemMagicFind = document.getElementById("itemMagicFindField").value;
    const itemPetLuck = document.getElementById("itemPetLuckField").value;
    const isRecipe = document.getElementById("isRecipe").checked;
    const isReforge = document.getElementById("isReforgeable").checked;
    const isRecomb = document.getElementById("isRecomb").checked;
    const abilityA = document.getElementById("abilityNameA").value;
    const abilityADesc = document.getElementById("abilityDescA").value;
    const abilityACost = document.getElementById("abilityCostA").value;
    const abilityACooldownNumber = document.getElementById("abilityNumberA").value;
    const abilityACooldown = document.getElementById("abilityCooldownA").value;
    const abilityACooldownType = document.getElementById("abilityCooldownTypeA").innerHTML;
    const abilityAUsage = document.getElementById("abilityUsageA").innerHTML;
    const abilityAType = document.getElementById("abilityTypeA").innerHTML;
    const abilityB = document.getElementById("abilityNameB").value;
    const abilityBDesc = document.getElementById("abilityDescB").value;
    const abilityBCost = document.getElementById("abilityCostB").value;
    const abilityBCooldownNumber = document.getElementById("abilityNumberB").value;
    const abilityBCooldown = document.getElementById("abilityCooldownB").value;
    const abilityBCooldownType = document.getElementById("abilityCooldownTypeB").innerHTML;
    const abilityBUsage = document.getElementById("abilityUsageB").innerHTML;
    const abilityBType = document.getElementById("abilityTypeB").innerHTML;
    const abilityC = document.getElementById("abilityNameC").value;
    const abilityCDesc = document.getElementById("abilityDescC").value;
    const abilityCCost = document.getElementById("abilityCostC").value;
    const abilityCCooldownNumber = document.getElementById("abilityNumberC").value;
    const abilityCCooldown = document.getElementById("abilityCooldownC").value;
    const abilityCCooldownType = document.getElementById("abilityCooldownTypeC").innerHTML;
    const abilityCUsage = document.getElementById("abilityUsageC").innerHTML;
    const abilityCType = document.getElementById("abilityTypeC").innerHTML;

    //Item Information
    document.getElementById("itemName").innerHTML = (itemName)?optimize(`${getColor(itemRarity)}${itemName}`, false):"";
    
    document.getElementById("itemDescription").innerHTML = (itemDescription)?optimize(itemDescription, true):"";
    
    document.getElementById("break3").innerHTML = (itemDescription)?"<br>":"";
    
    //Item Stats
    let nf = new Intl.NumberFormat();
    document.getElementById("itemDamage").innerHTML = (itemDamage)?optimize(`&7Damage: &c${(itemDamage<=0)?"-":"+"}${nf.format(itemDamage)}`, false):"";

    document.getElementById("itemStrength").innerHTML = (itemStrength)?optimize(`&7Strength: &c${(itemStrength<=0)?"-":"+"}${nf.format(itemStrength)}`, false):"";
    
    document.getElementById("itemCritDamage").innerHTML = (itemCritDamage)?optimize(`&7Crit Damage: &c${(itemCritDamage<=0)?"":"+"}${nf.format(itemCritDamage)}%`, false):"";
    
    document.getElementById("itemCritChance").innerHTML = (itemCritChance)?optimize(`&7Crit Chance: &c${(itemCritChance<=0)?"":"+"}${nf.format(itemCritChance)}%`, false):"";
    
    document.getElementById("itemAttackSpeed").innerHTML = (itemAttackSpeed)?optimize(`&7Bonus Attack Speed: &c${(itemAttackSpeed<=0)?"":"+"}${nf.format(itemAttackSpeed)}`, false):"";

    document.getElementById("itemSeaCreatureChance").innerHTML = (itemSeaCreatureChance)?optimize(`&7Sea Creature Chance: &c${(itemSeaCreatureChance<=0)?"":"+"}${nf.format(itemSeaCreatureChance)}%`, false):"";

    if(itemDamage || itemStrength || itemCritChance || itemCritDamage || itemAttackSpeed || itemSeaCreatureChance){
        document.getElementById("break1").innerHTML = "<br>";
    }else{
        document.getElementById("break1").innerHTML = "";
    }

    document.getElementById("itemHealth").innerHTML = (itemHealth)?optimize(`&7Health: &a${(itemHealth<=0)?"":"+"}${nf.format(itemHealth)}`, false):"";
    
    document.getElementById("itemDefense").innerHTML = (itemDefense)?optimize(`&7Defense: &a${(itemDefense<=0)?"":"+"}${nf.format(itemDefense)}`, false):"";
    
    document.getElementById("itemSpeed").innerHTML = (itemSpeed)?optimize(`&7Speed: &a${(itemSpeed<=0)?"":"+"}${nf.format(itemSpeed)}`, false):"";
    
    document.getElementById("itemIntelligence").innerHTML = (itemIntelligence)?optimize(`&7Intelligence: &a${(itemIntelligence<=0)?"":"+"}${nf.format(itemIntelligence)}`, false):"";
    
    document.getElementById("itemTrueDefense").innerHTML = (itemTrueDefense)?optimize(`&7True Defense: &a${(itemTrueDefense<=0)?"":"+"}${nf.format(itemTrueDefense)}`, false):"";
    
    document.getElementById("itemMagicFind").innerHTML = (itemMagicFind)?optimize(`&7Magic Find: &a${(itemMagicFind<=0)?"":"+"}${nf.format(itemMagicFind)}`, false):"";
    
    document.getElementById("itemPetLuck").innerHTML = (itemPetLuck)?optimize(`&7Pet Luck: &a${(itemPetLuck<=0)?"":"+"}${nf.format(itemPetLuck)}`, false):"";
    
    if(itemHealth || itemDefense || itemSpeed || itemIntelligence || itemTrueDefense || itemMagicFind || itemPetLuck){
        document.getElementById("break2").innerHTML = "<br>";
    }else{
        document.getElementById("break2").innerHTML = "";
    }
    
    //Item Abilities
    if(abilityA){
        document.getElementById("itemNameA").innerHTML = optimize(`${(abilityAType === "Orb Buff")?getColor(itemRarity):"&6"}${abilityAType}: ${abilityA} &e&l${(abilityAUsage === "Passive")?"":abilityAUsage.toUpperCase()}`, false);
        document.getElementById("itemDescA").innerHTML = (abilityADesc)?optimize(abilityADesc, true):"";
        document.getElementById("itemCostA").innerHTML = (abilityACost)?optimize(`&8Mana Cost: &3${abilityACost}`, false):"";
        if(abilityACooldown){
            switch(abilityACooldownType){
                case "Seconds":
                    document.getElementById("itemCooldownA").innerHTML = optimize(`&8Cooldown: &a${abilityACooldown}s`, false);
                    break;
                case "Charges":
                    document.getElementById("itemCooldownA").innerHTML = optimize(`&8Charges: &e${abilityACooldownNumber} &8/ &a${abilityACooldown}s`, false);
                    break;
                case "Tickers":
                    document.getElementById("itemCooldownA").innerHTML = optimize(`&8Tickers refill after ${abilityACooldown} seconds.`, false);
                    break;
            }
        }else document.getElementById("itemCooldownA").innerHTML = "";
        document.getElementById("break4").innerHTML = "<br>";
    }else{
        document.getElementById("itemNameA").innerHTML = "";
        document.getElementById("itemDescA").innerHTML = "";
        document.getElementById("itemCostA").innerHTML = "";
        document.getElementById("itemCooldownA").innerHTML = "";
        document.getElementById("break4").innerHTML = "";
    }

    if(abilityB){
        document.getElementById("itemNameB").innerHTML = optimize(`${(abilityBType === "Orb Buff")?getColor(itemRarity):"&6"}${abilityBType}: ${abilityB} &e&l${(abilityBUsage === "Passive")?"":abilityBUsage.toUpperCase()}`, false);
        document.getElementById("itemDescB").innerHTML = (abilityBDesc)?optimize(abilityBDesc, true):"";
        document.getElementById("itemCostB").innerHTML = (abilityBCost)?optimize(`&8Mana Cost: &3${abilityBCost}`, false):"";
        if(abilityBCooldown){
            switch(abilityBCooldownType){
                case "Seconds":
                    document.getElementById("itemCooldownB").innerHTML = optimize(`&8Cooldown: &a${abilityBCooldown}s`, false);
                    break;
                case "Charges":
                    document.getElementById("itemCooldownB").innerHTML = optimize(`&8Charges: &e${abilityBCooldownNumber} &8/ &a${abilityBCooldown}s`, false);
                    break;
                case "Tickers":
                    document.getElementById("itemCooldownB").innerHTML = optimize(`&8Tickers refill after ${abilityBCooldown} seconds.`, false);
                    break;
            }
        }else document.getElementById("itemCooldownB").innerHTML = "";
        document.getElementById("break5").innerHTML = "<br>";
    }else{
        document.getElementById("itemNameB").innerHTML = "";
        document.getElementById("itemDescB").innerHTML = "";
        document.getElementById("itemCostB").innerHTML = "";
        document.getElementById("itemCooldownB").innerHTML = "";
        document.getElementById("break5").innerHTML = "";
    }

    if(abilityC){
        document.getElementById("itemNameC").innerHTML = optimize(`${(abilityCType === "Orb Buff")?getColor(itemRarity):"&6"}${abilityCType}: ${abilityC} &e&l${(abilityCUsage === "Passive")?"":abilityCUsage.toUpperCase()}`, false);
        document.getElementById("itemDescC").innerHTML = (abilityCDesc)?optimize(abilityCDesc, true):"";
        document.getElementById("itemCostC").innerHTML = (abilityCCost)?optimize(`&8Mana Cost: &3${abilityCCost}`, false):"";
        if(abilityCCooldown){
            switch(abilityCCooldownType){
                case "Seconds":
                    document.getElementById("itemCooldownC").innerHTML = optimize(`&8Cooldown: &a${abilityCCooldown}s`, false);
                    break;
                case "Charges":
                    document.getElementById("itemCooldownC").innerHTML = optimize(`&8Charges: &e${abilityCCooldownNumber} &8/ &a${abilityCCooldown}s`, false);
                    break;
                case "Tickers":
                    document.getElementById("itemCooldownC").innerHTML = optimize(`&8Tickers refill after ${abilityCCooldown} seconds.`, false);
                    break;
            }
        }else document.getElementById("itemCooldownC").innerHTML = "";
        document.getElementById("break6").innerHTML = "<br>";
    }else{
        document.getElementById("itemNameC").innerHTML = "";
        document.getElementById("itemDescC").innerHTML = "";
        document.getElementById("itemCostC").innerHTML = "";
        document.getElementById("itemCooldownC").innerHTML = "";
        document.getElementById("break6").innerHTML = "";
    }
    
    //Bottom text
    document.getElementById("itemReforgeable").innerHTML = (isReforge)?optimize("&8This item can be reforged!", false):"";

    document.getElementById("itemRecipe").innerHTML = (isRecipe)?"<span style=\"color: #FFFF55\">Right-click to view recipes!</span><br>":"";

    if (itemSlayerType != "None" && itemSlayerLevel && itemSlayerLevel != "0") document.getElementById("itemSlayer").innerHTML = optimize(`&4☠ &cRequires &5${itemSlayerType} Slayer ${itemSlayerLevel}`, false);
    
    document.getElementById("itemType").innerHTML = optimize(`${getColor(itemRarity)}&l${(isRecomb)?"&ka&r &l":""}${itemRarity} ${itemType}${(isRecomb)?" &ka&r":""}`, false);
}