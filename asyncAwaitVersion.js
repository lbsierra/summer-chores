"use strict";

function mowYard(name) {    
    return new Promise((resolve) => {
        setTimeout(() => {
            console.log(`${name} mowed the yard.`);
            resolve();
        }, 2000);
    });
}

function weedEat(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.3) {
                console.log(`${name} finished using the weed eater.`);
                resolve();
            } else {
                const err = `${name} fell asleep after mowing the yard.`;  
                console.log(err);
                reject(err);
            }
        }, 1500);
    });
}

function trimHedges(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.4) {
                console.log(`${name} finished trimming the hedges.`);
                resolve();
            } else {
                const err = `${name} fell asleep after weed eating the yard.`;
                console.log(err);
                reject(err);
            }
        }, 1000);
    });
}

function collectWood(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.5) {
                console.log(`${name} finished collecting wood.`);
                resolve();
            } else {
                const err = `${name} fell asleep after trimming the hedges.`;
                console.log(err);
                reject(err);
            }
        }, 2500);
    });
}

function waterGarden(name) {
    return new Promise((resolve, reject) => {
        setTimeout(() => {
            if (Math.random() > 0.6) {
                console.log(`${name} finished watering the garden.`);
                resolve();
            } else {
                const err = `${name} fell asleep after collecting wood.`;
                console.log(err);
                reject(err);
            }
        }, 3000);
    });
}

async function doSummerChores(name) {
    try {
        await mowYard(name);
        await weedEat(name);
        await trimHedges(name);
        await collectWood(name);
        await waterGarden(name);
        console.log(`${name} completed all summer chores!`);
    } catch (error) {
        console.error(`Error: ${error}`);
    }
}

doSummerChores("Fred");
