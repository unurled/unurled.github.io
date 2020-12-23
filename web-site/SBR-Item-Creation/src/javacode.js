const generateJavaCode = () => {
    const itemID = document.getElementById("itemIDField").value;
    const skullID = document.getElementById("skullIDField").value;
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

    if(!itemID || !itemName || (itemID === 397 && !skullID)){
        document.getElementById("javaCode").innerHTML = "Complete the required fields to generate the java output";
        javaCode = "";
        return;
    }
    let result = "";
    let className = itemName.toUpperCase().replace(/ /g, "_").replace(/["']/g, "");
    if(itemID == 397) result = `public static ItemStack ${className} = GUIHelper.addLore(GUIHelper.addSkull(Utils.urlToBase64("${skullID}")), "${getColor(itemRarity)}${itemName}", `;
    else result = `public static ItemStack ${className} = GUIHelper.addLore(new ItemStack(Material.${IDs[itemID].toUpperCase()}), "${getColor(itemRarity)}${itemName}", `;

    //Item stats
    let nf = new Intl.NumberFormat();
    if(itemDamage) result += `"&7Damage: &c${(itemDamage<=0)?"-":"+"}${nf.format(itemDamage)}", `;
    if(itemStrength) result += `"&7Strength: &c${(itemStrength<=0)?"-":"+"}${nf.format(itemStrength)}", `;
    if(itemCritDamage) result += `"&7Crit Damage: &c${(itemCritDamage<=0)?"":"+"}${nf.format(itemCritDamage)}%", `;
    if(itemCritChance) result += `"&7Crit Chance: &c${(itemCritChance<=0)?"":"+"}${nf.format(itemCritChance)}%", `;
    if(itemAttackSpeed) result += `"&7Bonus Attack Speed: &c${(itemAttackSpeed<=0)?"":"+"}${nf.format(itemAttackSpeed)}", `;
    if(itemSeaCreatureChance) result += `"&7Sea Creature Chance: &c${(itemSeaCreatureChance<=0)?"":"+"}${nf.format(itemSeaCreatureChance)}%", `;
    
    if(itemDamage || itemStrength || itemCritChance || itemCritDamage || itemAttackSpeed || itemSeaCreatureChance) result = result + `" ", `;

    if(itemHealth) result += `"&7Health: &a${(itemHealth<=0)?"":"+"}${nf.format(itemHealth)}", `;
    if(itemDefense) result += `"&7Defense: &a${(itemDefense<=0)?"":"+"}${nf.format(itemDefense)}", `;
    if(itemSpeed) result += `"&7Speed: &a${(itemSpeed<=0)?"":"+"}${nf.format(itemSpeed)}", `;
    if(itemIntelligence) result += `"&7Intelligence: &a${(itemIntelligence<=0)?"":"+"}${nf.format(itemIntelligence)}", `;
    if(itemTrueDefense) result += `"&7True Defense: &a${(itemTrueDefense<=0)?"":"+"}${nf.format(itemTrueDefense)}", `;
    if(itemMagicFind) result += `"&7Magic Find: &a${(itemMagicFind<=0)?"":"+"}${nf.format(itemMagicFind)}", `;
    if(itemPetLuck) result +=`"&7Pet Luck: &a${(itemPetLuck<=0)?"":"+"}${nf.format(itemPetLuck)}", `;

    if(itemHealth || itemDefense || itemSpeed || itemIntelligence || itemTrueDefense || itemMagicFind || itemPetLuck) result += `" ", `;
    
    //Item Description
    const parts = itemDescription.split("\n");
    parts.forEach((elem) => {
        result += `"${elem}", `;
    });
    if(itemDescription) result += `" ", `;

    //Item abilities
    if(abilityA){
        result += `"${(abilityAType === "Orb Buff")?getColor(itemRarity):"&6"}${abilityAType}: ${abilityA} &e&l${(abilityAUsage === "Passive")?"":abilityAUsage.toUpperCase()}", `;
        if(abilityADesc){
            const abil = abilityADesc.split("\n");
            abil.forEach((elem) => {
                result += `"${elem}", `;
            });
        }
        if(abilityACost) result += `"${abilityACost}", `;
        if(abilityACooldown){
            switch(abilityACooldownType){
                case "Seconds":
                    result += `"&8Cooldown: &a${abilityACooldown}s", `;
                    break;
                case "Charges":
                    result += `"&8Charges: &e${abilityACooldownNumber} &8/ &a${abilityACooldown}s", `;
                    break;
                case "Tickers":
                    result += `"&8Tickers refill after ${abilityACooldown} seconds.", `;
                    break;
            }
        }
        result += `" ", `;
    }

    if(abilityB){
        result += `"${(abilityBType === "Orb Buff")?getColor(itemRarity):"&6"}${abilityBType}: ${abilityB} &e&l${(abilityBUsage === "Passive")?"":abilityBUsage.toUpperCase()}", `;
        if(abilityBDesc){
            const abil = abilityBDesc.split("\n");
            abil.forEach((elem) => {
                result += `"${elem}", `;
            });
        }
        if(abilityBCost) result += `"${abilityBCost}", `;
        if(abilityBCooldown){
            switch(abilityBCooldownType){
                case "Seconds":
                    result += `"&8Cooldown: &a${abilityBCooldown}s", `;
                    break;
                case "Charges":
                    result += `"&8Charges: &e${abilityBCooldownNumber} &8/ &a${abilityBCooldown}s", `;
                    break;
                case "Tickers":
                    result += `"&8Tickers refill after ${abilityBCooldown} seconds.", `;
                    break;
            }
        }
        result += `" ", `;
    }

    if(abilityC){
        result += `"${(abilityCType === "Orb Buff")?getColor(itemRarity):"&6"}${abilityCType}: ${abilityC} &e&l${(abilityCUsage === "Passive")?"":abilityCUsage.toUpperCase()}", `;
        if(abilityCDesc){
            const abil = abilityCDesc.split("\n");
            abil.forEach((elem) => {
                result += `"${elem}", `;
            });
        }
        if(abilityCCost) result += `"${abilityCCost}", `;
        if(abilityCCooldown){
            switch(abilityCCooldownType){
                case "Seconds":
                    result += `"&8Cooldown: &a${abilityCCooldown}s", `;
                    break;
                case "Charges":
                    result += `"&8Charges: &e${abilityCCooldownNumber} &8/ &a${abilityCCooldown}s", `;
                    break;
                case "Tickers":
                    result += `"&8Tickers refill after ${abilityCCooldown} seconds.", `;
                    break;
            }
        }
        result += `" ", `;
    }

    //bottom text
    if(isReforge) result += `"&8This item can be reforged!", `;
    if(isRecipe) result += `"&eRight-click to view recipes!", `;
    if(isRecomb) result += `"${getColor(itemRarity)}&k&la&r${getColor(itemRarity)}&l ${itemRarity.toUpperCase()}${itemType == "OTHER" ? "" : ` ${itemType}`} ${getColor(itemRarity)}&l&ka&r");`;
    else result += `"${getColor(itemRarity)}&l${itemRarity.toUpperCase()}${itemType == "OTHER" ? "" : ` ${itemType}`}");`;
    document.getElementById("javaCode").innerHTML = result;
    javaCode = result;
}